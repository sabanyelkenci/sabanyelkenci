const origin = `https://api.github.com/users/sabanyelkenci`;

export const fetchRepos = async () => {
  const URL = `${origin}/repos`;

  const encodedURL = encodeURI(URL);
  const response = await fetch(encodedURL);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
  }
  const data = await response.json();

  return data;
};
