export const homePage = (title, imgURL, content) => {
  const container = document.createElement("div");
  container.id = "container";
  container.className = "homeContainer";
  const titleEl = document.createElement("h2");
  titleEl.className = "title";
  titleEl.innerHTML = title;
  const homeContent = document.createElement("p");
  homeContent.id = "content";
  homeContent.innerHTML = content;
  // homeContent.style.fontFamily = `Courier New`;
  // homeContent.style.fontSize = `18px`;

  const homeImg = document.createElement("img");
  homeImg.className = "homeImg";
  homeImg.src = imgURL;
  homeImg.alt = "test";
  container.appendChild(titleEl);
  container.appendChild(homeImg);
  container.appendChild(homeContent);

  return container;
};
