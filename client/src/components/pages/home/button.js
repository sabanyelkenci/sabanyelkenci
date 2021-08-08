import { showRepoData } from "../../../handlers/showRepoData.js";

export const button = (text) => {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.innerHTML = text;
  btn.addEventListener("click", showRepoData);
  document.getElementById("root").appendChild(btn);

  return btn;
};
