import { state } from "../../data/data.js";
// import { resultData } from "../components/pages/home/resultData.js";
// import { resultData } from "../components/pages/home/resultData.js";

// const clear =()={

// };
// debugger;

export const showProfile = async () => {
  const list = document.getElementById("resultData");
  list.innerHTML = "";
  const response = await fetch("https://api.github.com/users/zehrayelkenci");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} \n -> ${URL}`);
  }

  const data = await response.json();
  state.profile = data;
  // data.state = data;
  // return the final data
  console.log(typeof state.profile);
  console.log(state.profile);

  const name = document.createElement("p");
  name.innerHTML = state.profile.name;

  list.appendChild(name);

  for (const key in state.profile) {
    if (Object.hasOwnProperty.call(state.profile, key)) {
      const element = state.profile[key];
      const myP = document.createElement("p");
      myP.innerHTML = `${key} : ${element}`;
      list.appendChild(myP);
    }
  }

  // for (const key in state.profile) {
  //   if (Object.hasOwnProperty.call(state.profile, key)) {
  //     const element = state.profile[key];
  //     for (const value in state.profile) {
  //       if (state.profile.hasOwnProperty.call(state.profile, value)) {
  //         const e = state.profile[value];
  //         const myP = document.createElement("p");
  //         myP.innerHTML = `${element} + ${e}`;
  //         list.appendChild(myP);
  //       }
  //     }
  //   }
  // }
};
