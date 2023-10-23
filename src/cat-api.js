const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = "live_Hhvp2PfV1or2BoU9hZVG6D4ILK3MNlHkiXMfVsKXtSMiQ5dQI2WhAPHnzacQbT6O";

import axios from "axios";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common["x-api-key"] = `${API_KEY}`;

function fetchBreeds() {
    return axios
       .get('/breeds')
};

function fetchCatByBreed(breedId) { 
   return axios.get('/images/search', {
        params: {
        limit: '10',
        breed_ids: `${breedId}`
        }
    })
//         .then((resp) => {
//     console.log(resp.data);
// })
//         .catch((eror) => {
//             console.error(eror);
//     })
};
// fetchCatByBreed("abys")

export {fetchBreeds, fetchCatByBreed};



////////////////////////////////////////////
// function fetchBreeds() {
//     // console.log((`${BASE_URL}/breeds`));
//  return fetch(`${BASE_URL}/breeds`)
//     .then((resp) => {
//     // console.log(resp);
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//     });
// };

// function fetchCatByBreed(breedId) {
//     console.log(axios.get(`${BASE_URL}/images/search?limit=10&breed_ids=${breedId}`));
//  return fetch (`${BASE_URL}/images/search?limit=10&breed_ids=${breedId}&api_key=${API_KEY}`)
//     .then((resp) => {
//     console.log(resp);
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//     });
// };

// function fetchCatInfo(id){
//  return fetch(`${BASE_URL}/images/${id}`)
//     .then(response => {
//       // console.log(response);
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     });
// };

// export {fetchBreeds, fetchCatByBreed, fetchCatInfo};
