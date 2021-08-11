import { state } from "../../data/data.js";

export const reset = () => {
  const list = document.getElementById("resultData");
  if (list) {
    list.innerHTML = "";
    list.innerHTML = "<h1>My Repos</h1>";
  }
};

export const showRepoData = async () => {
  reset();
  const response = await fetch(
    "https://api.github.com/users/sabanyelkenci/repos"
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} \n -> ${URL}`);
  }

  const data = await response.json();
  state.repos = data;

  console.log(typeof data.state);
  console.log(state.repos);

  for (let i = 0; i < state.repos.length; i++) {
    const repom = document.createElement("p");
    repom.innerHTML = state.repos[i].name;
    const list = document.getElementById("resultData");
    list.appendChild(repom);
  }

  // container.append(document.getElementById("resultData"));
};
