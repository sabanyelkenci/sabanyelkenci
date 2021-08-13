/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
import { resultData } from "../../shared/resultData.js";

export const home = () => {
  const container = document.createElement("div");
  container.className = "body";
  container.appendChild(resultData("Welcome to my first home page :-)"));
  return container;
};
