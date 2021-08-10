

export const resultData = (text,handler) => {
  const container = document.createElement("div");
  container.id = "resultData";
  container.className = "resultData";
  container.innerHTML= handler;
  const title = document.createElement("h2");
  title.className = "title";
  title.innerHTML = text;
  container.appendChild(title);
  return container;
};
