import { Octokit } from "octokit";

export default async function ProjectsPage() {
  const projects = await getRepositories();

  return (
    <main className="bg-offBlack flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold text-offWhite">Projects</h1>
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
              "mb-4 transform rounded-md p-4 shadow-md transition-transform hover:scale-105 text-offBlack"
            }
          >
            <h2 className="line-clamp-1 overflow-hidden text-ellipsis text-2xl font-bold">
              {project.name}
            </h2>
            <p className="line-clamp-3 text-ellipsis">{project.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
function randomColor() {
  // Generate random hue value within a range (e.g., 0 to 360 degrees)
  const hue: number = Math.floor(Math.random() * 360);

  // Set saturation and lightness values to ensure good contrast and visibility
  const saturation = 50 + Math.random() * 30; // 50-100%
  const lightness = 70 + Math.random() * 20; // 40-60%

  // Define starting and ending points for the gradient
  const startColor: string = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const endColor: string = `hsl(${(hue + Math.random() * 1000) % 360}, ${saturation}%, ${lightness}%)`;

  // Construct the linear gradient argument
  const linearGradient = `linear-gradient(to bottom right, ${startColor}, ${endColor})`;

  return linearGradient;
}

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function getRepositories() {
  const results = await octokit.request("GET /users/{username}/repos", {
    username: "JoshuaH-sudo",
    sort: "pushed",
  });

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

  return names;
}
