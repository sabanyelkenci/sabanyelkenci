import { state } from "../../data/data.js";

export const showProfile = async () => {
  const list = document.getElementById("resultData");
  list.innerHTML = "";
  const response = await fetch("https://api.github.com/users/zehrayelkenci");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} \n -> ${URL}`);
  }

  const data = await response.json();
  state.profile = data;

  console.log(typeof state.profile);
  console.log(state.profile);

  for (const key in state.profile) {
    if (Object.hasOwnProperty.call(state.profile, key)) {
      const element = state.profile[key];
      const myP = document.createElement("p");
      myP.innerHTML = ` <span style="color:blue">${key}</span>  </span> : ${element}`;
      list.appendChild(myP);
    }
  }
};
