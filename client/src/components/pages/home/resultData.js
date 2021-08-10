

export const resultData = (title) => {
  const container = document.createElement("div");
  container.id = "resultData";
  container.className = "resultData";
  const titleEl = document.createElement("h2");
  titleEl.className = "title";
  titleEl.innerHTML = title;
  container.appendChild(titleEl);
  return container;
};
