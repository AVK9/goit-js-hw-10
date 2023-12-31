import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';
// import Swiper from 'swiper';
import SlimSelect from 'slim-select'
// import './css/swiper.css';
import './css/slimselect.css';

const refs = {
    select: document.querySelector('.breed-select'),
    loaderMes: document.querySelector('.loader'),
    errorMes: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info'),
    sliderLine: document.querySelector('.swiper-wrapper'),
    // prewBtn: document.querySelector('.swiper-button-prev'),
    // nextBtn: document.querySelector('.swiper-button-next'),
}
refs.errorMes.style.display = 'none';
refs.select.style.display = 'none';
refs.loaderMes.style.display = 'none';
refs.sliderLine.innerHTML = "";
refs.catInfo.innerHTML = "";
// refs.prewBtn.style.display = 'none';
// refs.nextBtn.style.display = 'none';

fetchBreeds()
    .then((response) => {
        refs.select.innerHTML = createMarkup(response.data);
        new SlimSelect({
            select: refs.select,
            settings: {
                placeholderText: 'Which cat would you like to read about?',
            }
        })
    })
    .catch((err) => errLoad(err))
    .finally(_ => refs.loaderMes.style.display = 'none');
    
function createMarkup(arr) {
        refs.select.style.display = "flex";
        refs.loaderMes.style.display = 'initial';
        const placeholderEl = '<option data-placeholder="true">'
        const arrEls = arr.map(({ id, name }) =>
            `<option value="${id}">${name}</option>`).join("");
    return placeholderEl + arrEls;
}

 refs.select.addEventListener('change', onCatalog);
function onCatalog(e) {
    refs.loaderMes.style.display = 'initial';
    refs.sliderLine.innerHTML = "";
    refs.catInfo.innerHTML = "";
    fetchCatByBreed(e.target.value)
      .then((dataCat) => {
            refs.sliderLine.innerHTML = createCatInfo(dataCat.data);
            refs.catInfo.innerHTML =  createCatInfo2(dataCat);
            
            const swiper = new Swiper('.swiper', {
 slidesPerView: 1,
//   spaceBetween: 16,
  loop: true,
  autoplay: {
  delay: 2000,
                },
//   pagination: {
//     el: '.swiper-pagination',
//                 },
//     navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
});
        
        })
        .catch((err) => errLoad(err))
        .finally(_ => refs.loaderMes.style.display = 'none');

}

function createCatInfo(arr) {
   // console.log(arr);
     return arr.map(({id, url}) =>
     `
        
      <div class="swiper-slide">
        <img src="${url}" 
          alt="${id}" width='550'/>
              </div>
        `).join("");

}
function createCatInfo2(dataCat) {
            const { data: [{ id, url,
                breeds: [{ name, description, temperament }] }] } = dataCat;
    return `
<h2 class="h-name">${name}</h2>
  <h3 class="h-origin"></h3>
 <p class="p-description">${description}</p>
 <p class="p-temperament"><i><b>Temperament: </b>${temperament}</i></p>
        `;
}

function errLoad(err) {
    console.log(err);
    refs.select.style.display = 'none';
    refs.sliderLine.innerHTML = "";
    refs.catInfo.innerHTML = "";
    Notiflix.Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
    refs.errorMes.style.display = 'initial';
}
