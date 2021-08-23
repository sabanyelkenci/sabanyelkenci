import { state } from "../../../../data/data.js";

export const getProjects = async () => {
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
};
