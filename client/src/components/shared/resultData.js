

export const resultData = (title, element) => {
  const container = document.createElement("div");
  container.id = "resultData";
  container.className = "resultData";
  const titleEl = document.createElement("h2");
  titleEl.className = "title";
  titleEl.innerHTML = title;
  const infoDiv = document.createElement("div");
  infoDiv.className = "infoDiv";
  infoDiv.innerHTML = element;
  container.appendChild(titleEl);
  container.appendChild(infoDiv);
  return container;
};
