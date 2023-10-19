import { fetchBreeds, fetchCatByBreed } from '/cat-api';

console.log(fetchBreeds());
console.log(fetchCatByBreed('abys'));

refs = {
    select: document.querySelector('.breed-select'),
    loaderMes: document.querySelector('.loader'),
    errorMes: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info'),
}

// refs.select.addEventListener('change', onCatalog);



fetchBreeds()
    .then((data) => refs.select.innerHTML = createMarkup(data)
    )
    .catch((err) => console.log(err));






function createMarkup(arr) {
     return arr.map(({id, name }) =>
     `<option value="${id}">${name}</option>`).join("");
}
