// import { state } from "../../../../data/data.js";
import { fetchRepos } from "../../../api-calls/api-calls.js";

export const githubProjects = document.createElement("section");
githubProjects.className = "project-section";
const titleEl = document.createElement("h2");
titleEl.innerHTML = "My Projects";
titleEl.className = "p-h2";
githubProjects.appendChild(titleEl);

const mainContainer = document.createElement("div");
mainContainer.className = "main-container";
githubProjects.appendChild(mainContainer);

const projectList = document.createElement("div");
projectList.className = "projects-list";
mainContainer.appendChild(projectList);

export const myGitHubProjects = async () => {
  try {
    const response = await fetchRepos();
    console.log(response);
    
    response.forEach((element) => {
      const pCard = document.createElement("div");
      pCard.className = "pCard";
      const projectHeader = document.createElement("div");
      projectHeader.className = "project-header";

      const info = document.createElement("div");
      info.className = "info";
      const dateCreated = new Date(element.created_at);
      info.innerHTML = `<span class='name'>${
        element.name
      }</span> <span class='date'>${dateCreated.toLocaleDateString()}</span>`;

      const description = document.createElement("div");
      description.className = "description";
      description.textContent = `${element.description}`;

      projectList.appendChild(pCard);
      pCard.append(projectHeader, description);
      projectHeader.append(info);
    });
  } catch (error) {
    console.log(error);
  }
};
