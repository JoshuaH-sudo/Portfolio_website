import debug from "debug";
import { Octokit } from "octokit";
import { randomColor } from "./utils";

const errorLogger = debug("error");
const infoLogger = debug("info");

export default async function ProjectGrid() {
  const projects = await getRepositories();

  if (projects.length === 0) {
    return (
      <p className="text-center text-offWhite">
        <span className="text-highlight2">Error Occurred:</span> No projects
        found, Please try again later.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-5">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.href}
          target="_blank"
          style={{
            backgroundImage: randomColor(),
          }}
          className={
            "mb-4 transform rounded-md p-4 text-offBlack shadow-md transition-transform hover:scale-105"
          }
        >
          <h2 className="line-clamp-1 overflow-hidden text-ellipsis text-2xl font-bold">
            {project.name}
          </h2>
          <p className="line-clamp-3 text-ellipsis">{project.description}</p>
        </a>
      ))}
    </div>
  );
}

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function getRepositories() {
  infoLogger("Fetching repositories from GitHub");
  try {
    const results = await octokit.request("GET /users/{username}/repos", {
      username: "JoshuaH-sudo",
      sort: "pushed",
    });
    infoLogger("GitHub API response", results);

    infoLogger("Filtering and sorting repositories");
    const names = results.data
      .filter((repo) => repo.stargazers_count && repo.stargazers_count > 0)
      .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
      .map((repo) => {
        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          href: repo.html_url,
        };
      });

    infoLogger("Filtered repositories", names);
    return names;
  } catch (error) {
    errorLogger("Error fetching repositories from GitHub", error);
    return [];
  }
}