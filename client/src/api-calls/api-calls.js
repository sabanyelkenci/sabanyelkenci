/**
 * Fetches a specific resource from the typicode gitHub API.
 *
 * @async
 * @param {...string|number} params - The parameters to append to the URL.
 * @returns {Promise<object>} A resource object returned from the API.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
// import { data } from "../../data/data.js";

const origin = "https://api.github.com";

export const fetchData = async () => {
  // declare resource's URL

  // const paramPaths = params.join("/");
  // const URL = `${origin}/${paramPaths}`;
  // fetch, validate and parse  the API data

  // const encodedURL = encodeURI(URL);
  const response = await fetch('https://api.github.com/users/sabanyelkenci/repos');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} \n -> ${URL}`);
  }

  data.data = await response.json();
  // return the final data

  return data;
};
