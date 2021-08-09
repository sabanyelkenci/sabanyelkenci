import { state } from "../../data/data.js";
export const showRepoData = async () => {
  const response = await fetch(
    "https://api.github.com/users/zehrayelkenci/repos"
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} \n -> ${URL}`);
  }

  const data = await response.json();
  data.state=data;
  // return the final data
  console.log(typeof data.state);
  console.log(data.state);

  for (let i = 0; i < data.state.length; i++) {
    const repom = document.createElement("p");
    repom.innerHTML = data.state[i].name;
    const list = document.getElementById("resultData");
    list.appendChild(repom);
  }
};
