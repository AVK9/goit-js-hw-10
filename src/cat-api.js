import axios from "axios";
const API_KEY = "live_Hhvp2PfV1or2BoU9hZVG6D4ILK3MNlHkiXMfVsKXtSMiQ5dQI2WhAPHnzacQbT6O";
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

};

export {fetchBreeds, fetchCatByBreed};