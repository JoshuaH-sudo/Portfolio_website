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
    <div className="grid h-full grid-cols-2 gap-5 sm:grid-cols-3">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.href}
          target="_blank"
          style={{
            backgroundImage: randomColor(),
          }}
          className={
            " mb-4 min-h-[100px] transform rounded-md p-4 text-offBlack shadow-md transition-transform hover:scale-105"
          }
        >
          <h2 className="line-clamp-1 overflow-x-hidden text-ellipsis text-sm font-bold sm:text-2xl">
            {project.name}
          </h2>
          <p className="sm:text-md line-clamp-3 h-full text-ellipsis text-xs">
            {project.description}
          </p>
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
          name: cleanRepoName(repo.name),
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

function cleanRepoName(name: string) {
  const cleanName = name
    // Replace hyphens and underscores with spaces
    .replace(/[-_]/g, " ")
    // Capitalize every word
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return cleanName;
}
