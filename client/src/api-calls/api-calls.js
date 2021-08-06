/**
 * Fetches a specific resource from the typicode gitHub API.
 *
 * @async
 * @param {...string|number} params - The parameters to append to the URL.
 * @returns {Promise<object>} A resource object returned from the API.
 *
 * @throws {Error} HTTP error! status: {number}.
 */

 const origin = 'https://api.github.com/'

 export const gitHubProfil =async (...params)=>{

    //declare resource's URL

    const paramPaths = params.join("/");
    const URL = `${origin}+${paramPaths}`;
    console.log(URL);

    // fetch, validate and parse  the API data 

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if(!response.ok){

        throw new Error(`HTTP error! status: ${response.status} \n -> ${URL}`);
    }

    const data = await response.json();
    // return the final data

    return data;
    
 };


