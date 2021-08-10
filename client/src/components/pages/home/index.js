import { resultData } from "./resultData.js";
import { button } from "./button.js";
import { showRepoData } from "../../../handlers/showRepoData.js";
import { showProfile } from "../../../handlers/showProfile.js";
import { reset } from "../../../handlers/reset.js";
/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = () => {
  const container = document.createElement("div");
  container.className = "body";

  // container.appendChild(inputGreeting());
  container.appendChild(button("MyProfile", showProfile));
  container.appendChild(button("MyRepos", showRepoData));
  container.appendChild(button("Reset", reset));
  container.appendChild(resultData("My GitHub Repos"));

  return container;
};
