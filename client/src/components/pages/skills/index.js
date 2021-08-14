/**
 * The skills page.
 *
 * @returns {HTMLDivElement} A rendered skills page.
 */
import { mySkills } from "./skills.js";

export const skills = () => {
  const container = document.createElement("div");
  container.className = "body";

  container.appendChild(mySkills());

  return container;
};
