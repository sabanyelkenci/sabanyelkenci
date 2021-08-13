import { showRepoData } from "../../handlers/showRepoData.js";

export const button = (text, event) => {
  const btn = document.createElement("button");
  btn.className = "btn btn-dark";
  btn.innerHTML = text;
  btn.addEventListener("click", event);
  document.getElementById("root").appendChild(btn);

  return btn;
};
