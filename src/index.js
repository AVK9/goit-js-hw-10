import { fetchBreeds, fetchCatByBreed } from './cat-api';

console.log(fetchBreeds());
console.log(fetchCatByBreed('abys'));

refs = {
    select: document.querySelector('.breed-select')
}

// refs.select.addEventListener('click', onCatalog);


// onCatalog();
// function onCatalog(evt) {
// //   const {name} = evt.currentTarget.elements;

//   catCat()
//     .then((data) => elements.list.innerHTML = createMarkup(data.name))
//     .catch((err) => console.log(err));
// }



// function createMarkup(arr) {
//     return arr.map(({id, name }) =>
//   `<option value="${id}">${name}</option>`).join("");
// }
