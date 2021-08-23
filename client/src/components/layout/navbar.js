/**
 * The shared navbar.
 *
 * @param {object} routes - A routes object, see /src/routes.js.
 * @returns {HTMLDivElement} A rendered nav bar element.
 */

// import { state } from "../../../data/data.js";

export const navbar = (routes) => {
  const container = document.createElement("nav");
  container.className = "navbarMain";
  const div = document.createElement("div");
  div.className = "div";
  const div1 = document.createElement("div");
  div1.className = "div1";

  // eslint-disable-next-line spellcheck/spell-checker
  div1.innerHTML = `Saban Yelkenci `;

  const div2 = document.createElement("div");
  div2.className = "div2";
  container.appendChild(div);
  div.appendChild(div1);

  div.appendChild(div2);

  for (const route of routes) {
    const div3 = document.createElement("div");
    div3.id = "menu";
    div3.className = "div3";

    const anchor = document.createElement("a");
    anchor.innerHTML = route.name;
    anchor.href = route.path;
    anchor.setAttribute("data-navigo", "");
    div2.append(div3);
    div3.append(anchor);
  }

  return container;
};
