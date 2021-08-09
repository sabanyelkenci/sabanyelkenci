

export const resultData = () => {
  const container = document.createElement("div");
  container.id = "resultData";
  container.className = "resultData";
  const title = document.createElement("h2");
  title.className = "title";
  title.innerHTML = "My GitHub Repos";
  container.appendChild(title);
  return container;
};
