import { fetchBreeds, fetchCatByBreed, fetchCatInfo} from './cat-api';

console.log(fetchBreeds());
console.log(fetchCatByBreed('char'));
console.log(fetchCatInfo('0XYvRd7oD'));

const refs = {
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
     return arr.map(({id, name}) =>
     `<option value="${id}">${name}</option>`).join("");
}

refs.select.addEventListener('change', onCatalog);
function onCatalog(e) {

    console.log(e.target.value);
    fetchCatByBreed(e.target.value)
        .then((dataCat) => {
            console.log(dataCat);
            const { id, url } = dataCat[0]
            refs.catInfo.innerHTML = createCatInfo(dataCat);
            //  refs.catInfo.insertAdjacentHTML('beforeend', markupCatInfo);
    console.log(id);
    fetchCatInfo(id)
        .then((dataCatInfo) => {
            console.log(dataCatInfo);
            
            // refs.catInfo.innerHTML = createCatInfo(dataCat);
            
             refs.catInfo.insertAdjacentHTML('beforeend', createCatInfo2(dataCatInfo));
    
        })
        .catch((err) => console.log(err));
   
        })
        .catch((err) => console.log(err));
}

function createCatInfo(dataCat) {

    console.log(dataCat[0]);
    const {
      id,
      url,
    } = dataCat[0];
 
    return `<img src="${url}" alt="${id}" width='300'>`
}

function createCatInfo2(dataCatInfo) {
const { breeds: [{name, description, temperament }]} = dataCatInfo;
    return `<h2 class="h-name">${name}</h2>
    <h3 class="h-origin"></h3>
    <p class="p-description">${description}</p>
    <p class="p-temperament">${temperament}</p>`
     
}