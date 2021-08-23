/**
 * The skills page.
 *
 * @returns {HTMLDivElement} A rendered skills page.
 */
import { githubProjects } from "./projects.js";
import { myGitHubProjects } from "./projects.js";

export const myProjects = () => {
  const container = document.createElement("div");
  container.className = "body";

  container.appendChild(githubProjects);
  container.append(myGitHubProjects());

  return container;
};
