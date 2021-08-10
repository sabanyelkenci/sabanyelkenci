import { state } from "../../data/data.js";
import { resultData } from "../components/pages/home/resultData.js";
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

  // for (let i = 0; i < state.profile.length; i++) {
  //   const myProfile = document.createElement("p");
  //   myProfile.innerHTML = state.profile[i].value;
  //   const list = document.getElementById(resultData);
  //   list.appendChild(myProfile);
  // }

  // for (let i = 0; i < state.repos.length; i++) {
  //   const repom = document.createElement("p");
  //   repom.innerHTML = state.repos[i].name;
  //   const list = document.getElementById("resultData");
  //   list.appendChild(repom);
  // }
  //   resultData("my Profile");
  //   const myName= document.createElement("p");
  //   myName.innerHTML = state.profile.name
};
