/**
 * The shared footer.
 *
 * @returns {HTMLDivElement} A rendered footer element.
 */
export const footer = () => {
  const container = document.createElement("div");
  container.className = "bottom";

  const div1 = document.createElement("div");
  div1.className = "footer-text";
  div1.innerHTML = "Copyright © 2020 | Saban Yelkenci";

  const div2 = document.createElement("div");
  div2.id = "footer-items";

  const a1 = document.createElement("a");

  const link1 = document.createTextNode("MyGitHub");
  a1.appendChild(link1);
  a1.className = "aLink";
  a1.title = "MyGitHub";
  a1.href = "https://github.com/sabanyelkenci";
  a1.target = "_blank";

  const a2 = document.createElement("a");
  a2.className = "aLink";
  const link2 = document.createTextNode("MyTwitter");
  a2.appendChild(link2);
  a2.title = "Twitter";
  a2.href = "https://twitter.com/sabanyelkenci";
  a2.target = "_blank";

  const a3 = document.createElement("a");

  const link3 = document.createTextNode("MyLinkedIn");
  a3.appendChild(link3);
  a3.title = "Twitter";
  a3.href = "https://www.linkedin.com/in/sabanyelkenci/";
  a3.target = "_blank";

  container.appendChild(div1);
  container.appendChild(div2);
  div2.appendChild(a1);
  div2.appendChild(a2);
  div2.appendChild(a3);
  return container;
};
