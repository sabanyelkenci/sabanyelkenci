import { resultData } from "./resultData.js";
import { button } from "./button.js";


/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
export const home = () => {
  const container = document.createElement("div");
  container.className = "body";

  // container.appendChild(inputGreeting());
  container.appendChild(resultData());
  container.appendChild(button("MyRepos"));

  return container;
};
