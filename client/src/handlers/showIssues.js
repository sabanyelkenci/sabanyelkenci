import { state } from "../../data/data.js";

export const showIssues = async () => {
  const list = document.getElementById("resultData");
  list.innerHTML = "";
  list.innerHTML = "<h1>My Issues</h1>";
  const response = await fetch(
    "https://api.github.com/search/issues?q=author:sabanyelkenci repo:HackYourFutureBelgium/class-13-14"
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} \n -> ${URL}`);
  }

  const data = await response.json();
  state.issues = data;

  console.log(typeof state.issues);
  console.log(state.issues);

  for (let i = 0; i < state.issues.items.length; i++) {
    const element = `${state.issues.items[i].title}`;
    const myI = document.createElement("p");
    myI.innerHTML = element;
    list.appendChild(myI);
  }
};
