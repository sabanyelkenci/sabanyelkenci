import { state } from "../../data/data.js";

// const clear =()={

// };

export const showRepoData = async () => {
  const response = await fetch(
    "https://api.github.com/users/zehrayelkenci/repos"
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} \n -> ${URL}`);
  }

  const data = await response.json();
  state.data = data;
  // data.state = data;
  // return the final data
  console.log(typeof data.state);
  console.log(state.data);

  for (let i = 0; i < state.data.length; i++) {
    const repom = document.createElement("p");
    repom.innerHTML = state.data[i].name;
    const list = document.getElementById("resultData");
    list.appendChild(repom);
    // list.insertBefore(repom, list.childNodes[0]);
  }
};
