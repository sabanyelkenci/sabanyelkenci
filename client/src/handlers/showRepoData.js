export const showRepoData = async () => {
  const response = await fetch(
    "https://api.github.com/users/zehrayelkenci/repos"
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} \n -> ${URL}`);
  }

  const data = await response.json();
  // return the final data
  console.log(typeof data);
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    const repom = document.createElement("p");
    repom.innerHTML = data[i].name;
    document.getElementById("result").appendChild(repom);
  }
};

// //.forEach(([key, value]) => {
//     div.appendChild(document.createElement(key.full_name));
//   });
