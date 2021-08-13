

import { resultData } from "../../shared/resultData.js";
import { button } from "../../shared/button.js";
import { showRepoData } from "../../../handlers/showRepoData.js";
import { showProfile } from "../../../handlers/showProfile.js";
import { showIssues } from "../../../handlers/showIssues.js";
import { reset } from "../../../handlers/reset.js";
/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const myGithub = () => {
  const container = document.createElement("div");
  container.className = "body";

  // container.appendChild(inputGreeting());
  container.appendChild(button("MyProfile", showProfile));
  container.appendChild(button("MyRepos", showRepoData));
  container.appendChild(button("MyIssues", showIssues));
  container.appendChild(button("Reset", reset));
  container.appendChild(resultData("My GitHub Information"));

  return container;
};