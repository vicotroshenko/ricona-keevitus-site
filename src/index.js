const openModalBtn = document.querySelectorAll('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const imageContainer = document.querySelector('.js-container-slider');
const sliderRef = document.querySelector('.js-slider');
const imgRef = document.querySelectorAll('.js-img');
const scaleBtnPlus = document.querySelector('.js-scale-plus');
const scaleBtnMinus = document.querySelector('.js-scale-minus');
const bodyRef = document.querySelector('body');

const state = {
  imageList: [],
  index: 0,
}


openModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));
openModalBtn.forEach(btn => btn.addEventListener('click', getImage));
closeModalBtn.addEventListener('click', toggleModal);

sliderRef?.addEventListener('click', getSlider);

function toggleModal() {
  modal.classList.toggle('is-hidden');
  bodyRef.classList.toggle('overflow-hidden');
}

imgRef.forEach(img => state.imageList.push(img.src));

function getImage(event) {
  imageContainer.innerHTML = `<img src="${event.target.src}" alt="" class="img"/>`;
}

function getSlider(event) {
  const name = event.target.name;

  if (name === undefined || name === '') {
    return;
  }
  if (name === 'scale') {
    imageContainer.classList.toggle('increase');
    scaleBtnMinus.classList.toggle('hidden');
    scaleBtnPlus.classList.toggle('hidden');
    sliderRef.classList.toggle('scroll-on');
    return;
  }

  state.index = name === 'forward' ? state.index + 1 : state.index;
  state.index = name === 'back' ? state.index - 1 : state.index;
  state.index = state.index > state.imageList.length - 1 ? 0 : state.index;
  state.index = state.index < 0 ? state.imageList.length - 1 : state.index;
 
  imageContainer.innerHTML = `<img src="${state.imageList[state.index]}" alt="" class="img animation"/>`;
}
