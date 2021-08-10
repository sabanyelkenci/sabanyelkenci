import { state } from "../../data/data.js";
import { resultData } from "../components/pages/home/resultData.js";

// const clear =()={

// };

export const showProfile = async () => {
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
  

//   resultData("my Profile");
//   const myName= document.createElement("p");
//   myName.innerHTML = state.profile.name


};
