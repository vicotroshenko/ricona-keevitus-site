const openModalBtn = document.querySelectorAll('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const imageContainer = document.querySelector('.js-container-slider');
const sliderRef = document.querySelector('.js-slider');
const imgRef = document.querySelectorAll('.js-img');
const scaleBtnPlus = document.querySelector('.js-scale-plus');
const scaleBtnMinus = document.querySelector('.js-scale-minus');
const bodyRef = document.querySelector('body');

let imageList = [];
let index = 0;

openModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));
openModalBtn.forEach(btn => btn.addEventListener('click', getImage));
closeModalBtn.addEventListener('click', toggleModal);

sliderRef?.addEventListener('click', getSlider);

function toggleModal() {
  modal.classList.toggle('is-hidden');
  bodyRef.classList.toggle('overflow-hidden');
}

imgRef.forEach(img => imageList.push(img.src));

function getImage(event) {
  console.log(event.target);
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

  const slideBox = imageList.filter(
    (slide, index, array) => array.indexOf(slide) === index
  );

  index = name === 'forward' ? index + 1 : index;
  index = name === 'back' ? index - 1 : index;
  index = index > slideBox.length - 1 ? 0 : index;
  index = index < 0 ? slideBox.length - 1 : index;


  imageContainer.innerHTML = `<img src="${slideBox[index]}" alt="slede number${index}" class="img animation"/>`;
}

