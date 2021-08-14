export const mySkills = (img1, img2, img3, img4, img5) => {
  const container = document.createElement("div");
  // container.className="body";

  const row1 = document.createElement("div");
  row1.className = "row";
  const div1 = document.createElement("div");
  div1.className = "col";
  div1.innerHTML = img1;
  row1.appendChild(div1);
  const div2 = document.createElement("div");
  div2.innerHTML = "2";
  div2.className = "col";
  row1.appendChild(div2);

  const row2 = document.createElement("div");
  row2.className = "row";
  const div3 = document.createElement("div");
  div3.className = "col";
  div3.innerHTML = "3";
  row2.appendChild(div3);

  const div4 = document.createElement("div");
  div4.innerHTML = "4";
  div4.className = "col";
  row2.appendChild(div4);

  container.appendChild(row1);
  container.appendChild(row2);

  const list = document.querySelector("col");
  console.log(list);

  return container;
};
