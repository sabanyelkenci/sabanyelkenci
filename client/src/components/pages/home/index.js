// import { inputGreeting } from '../../shared/input-greeting.js';

/**
 * The gitHub page.
 *
 * @returns {HTMLDivElement} A rendered quiz page.
 */
export const home = () => {
  const container = document.createElement("div");
  container.className = "body";

  // container.appendChild(inputGreeting());

  return container;
};
