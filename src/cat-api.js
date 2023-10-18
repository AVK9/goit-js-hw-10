const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY = "live_Hhvp2PfV1or2BoU9hZVG6D4ILK3MNlHkiXMfVsKXtSMiQ5dQI2WhAPHnzacQbT6O";

import axios from "axios";
axios.defaults.headers.common["x-api-key"] = `${API_KEY}`;


function fetchBreeds(id, name) {
 return fetch(`${BASE_URL}/breeds`)
    .then((resp) => {
    // console.log(resp);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
    })
};

function fetchCatByBreed(breedId){
 return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then((resp) => {
    // console.log(resp);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
};

export {fetchBreeds, fetchCatByBreed};



