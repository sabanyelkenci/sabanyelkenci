import { state } from "../../data/data.js";

export const showProfile = async () => {
  const list = document.getElementById("resultData");
  list.innerHTML = "";
  list.innerHTML = "<h1>My Profile</h1>";

  const response = await fetch("https://api.github.com/users/sabanyelkenci");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} \n -> ${URL}`);
  }

  const data = await response.json();
  state.profile = data;
  const myP = document.createElement("p");
  // debugger;
  myP.innerHTML = `
      <span style="color:blue">My user name is :</span> ${state.profile.login} <br> <br>
      <span style="color:blue">My blog is :</span> ${state.profile.blog} <br><br>
      <span style="color:blue">Number of my public repos :</span> ${state.profile.public_repos} <br><br>
      <span style="color:blue">My followers :</span> ${state.profile.followers} <br><br>
      <span style="color:blue">My fallowing :</span> ${state.profile.following} 
  `;
  list.appendChild(myP);

  // console.log(typeof state.profile);
  // console.log(state.profile);

  // for (const key in state.profile) {
  //   if (Object.hasOwnProperty.call(state.profile, key)) {
  //     const element = state.profile[key];
  //     const myP = document.createElement("p");
  //     myP.innerHTML = ` <span style="color:blue">${key}</span>  </span> : ${element}`;
  //     list.appendChild(myP);
  //   }
  // }
};
