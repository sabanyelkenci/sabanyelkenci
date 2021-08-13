export const resultData = (title) => {
  const container = document.createElement("div");
  container.id = "resultData";
  container.className = "resultData";

  container.innerHTML =
    "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOcEfuGD3FUfSBWGP86vD6faeERFXThgMyJfBJYgBhMREF8FtThd775lbXnuUbOqTJtg&usqp=CAU'>";
  const titleEl = document.createElement("h2");
  titleEl.className = "title";
  titleEl.innerHTML = title;

  container.appendChild(titleEl);

  return container;
};
