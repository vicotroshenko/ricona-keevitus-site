const openModalBtn = document.querySelectorAll('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const imageContainer = document.querySelector('.js-container-slider');
const btnBack = document.querySelector('.js-btn-slider-back');
const btnForward = document.querySelector('.js-btn-slider-forward');

let imageList = [];
let index = 0;

openModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));
openModalBtn.forEach(btn => btn.addEventListener('click', getImage));
closeModalBtn.addEventListener('click', toggleModal);
btnBack.addEventListener('click', getSlider);
btnForward.addEventListener('click', getSlider);

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

openModalBtn.forEach(btn => imageList.push(btn.src));
console.log(imageList);

function getImage(event) {
  imageContainer.innerHTML = `<img src="${event.target.src}" alt="" class="img"/>`;
}
function getSlider(event) {
  const name = event.target.name;
  index = name === 'forward' ? index + 1 : index - 1;
  index = index > imageList.length - 1 ? 0 : index;
  index = index < 0 ? imageList.length - 1 : index;
  console.log(index);
  imageContainer.innerHTML = `<img src="${imageList[index]}" alt="" class="img"/>`;
}
