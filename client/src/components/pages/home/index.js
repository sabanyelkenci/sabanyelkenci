/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */
import { homePage } from "./homeContent.js";
// import { state } from "../../../../data/data.js";

export const home = () => {
  const container = document.createElement("div");
  container.className = "body";
  const url = `https://avatars.githubusercontent.com/u/62225567?v=4`;
  const content = `<span style='line-height:2.4'> <br> <span style="color:black;font-weight:bold; font-size:28px" > Hi there! </span> <br>
  I'm Saban Yelkenci. <br>
  I am a father and a student currently studying <mark>Frontend Development</mark> in  <mark>HackYourFuture Belgium</mark>. <br>
  I'm <mark>enthusiastic</mark> about tech in coding and learning new things about computers and what they can do. </span>`;

  container.appendChild(
    homePage("Welcome to my first home page :-)", url, content)
  );
  return container;
};
