import { state } from "../../../../data/data.js";

export const mySkills = () => {
  const skillsSection = document.createElement("section");
  skillsSection.className = "skills";
  const titleEl = document.createElement("h2");
  titleEl.innerHTML = "My Skills";
  titleEl.className = "skills-h2";
  skillsSection.appendChild(titleEl);

  state.skills.forEach((element) => {
    const container = document.createElement("div");
    container.id = "skills";
    container.className = "skills-Item";

    const img = document.createElement("img");
    img.src = element.path;
    img.alt = element.alt;
    container.appendChild(img);

    const titleLogo = document.createElement("h4");
    titleLogo.innerHTML = element.type.toUpperCase();
    container.appendChild(titleLogo);

    skillsSection.appendChild(container);
  });

  return skillsSection;
};
