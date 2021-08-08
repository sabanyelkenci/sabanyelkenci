export const resultData = () => {
  const resultDiv = document.createElement("div");
  resultDiv.className = "result";
  resultDiv.id = "result";

  document.getElementById("root").appendChild(resultDiv);

  const title = document.createElement("h2");
  title.className = "title";
  title.innerHTML = "GitHub Profile Information";
  resultDiv.appendChild(title);
  return resultDiv;
};
