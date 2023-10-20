import { fetchBreeds, fetchCatByBreed } from './cat-api';

console.log(fetchBreeds());
console.log(fetchCatByBreed('char'));

refs = {
    select: document.querySelector('.breed-select'),
    loaderMes: document.querySelector('.loader'),
    errorMes: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info'),
}

fetchBreeds()
    .then((data) => {
         console.log(data);
        refs.select.innerHTML = createMarkup(data);
    }
    )
    .catch((err) => console.log(err));

function createMarkup(arr) {
     return arr.map(({id, name }) =>
     `<option value="${id}">${name}</option>`).join("");
}

refs.select.addEventListener('change', onCatalog);
function onCatalog(e) {
    console.log(e.target.value);

    fetchCatByBreed(e.target.value)
        
        .then((dataCat) => {
            console.log(dataCat);
            refs.catInfo.innerHTML = createCatInfo(dataCat);
        
    })
    .catch((err) => console.log(err));

};



// function createCatInfo(dataCat) {

//     console.log(data[0]);
//     const {
//       url,
//   } = dataCat[0];

//   const {
//        description,
//        temperament,
    
//   } = data[0];

 
//     return `<img src="${url}" alt="" width='300'>
//       <h2 class="h-name"></h2>
//       <h3 class="h-origin"></h3>
//       <p class="p-description">${description}</p>
//       <p class="p-temperament">${temperament}</p>`
// }


function createCatInfo(e) {
    return e.map(({
        id, url, data,
     name, description, temperament
}) =>
     `<img src="${url}" alt="${name}" width='300'>
      <h2 class="h-name">${name}</h2>
      <h3 class="h-origin"></h3>
      <p class="p-description">${description}</p>
      <p class="p-temperament">${temperament}</p>`);
}