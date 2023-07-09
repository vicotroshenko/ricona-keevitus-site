const openModalBtn = document.querySelectorAll('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const imageContainer = document.querySelector('.js-container-slider');
const sliderRef = document.querySelector('.js-slider');
const imgRef = document.querySelectorAll('.js-img');

let imageList = [];
let index = 0;

openModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));
openModalBtn.forEach(btn => btn.addEventListener('click', getImage));
closeModalBtn.addEventListener('click', toggleModal);

sliderRef?.addEventListener('click', getSlider);
console.log(sliderRef)
function toggleModal() {
  modal.classList.toggle('is-hidden');
}

imgRef.forEach(img => imageList.push(img.src));
console.log(imageList);

function getImage(event) {
  imageContainer.innerHTML = `<img src="${event.target.src}" alt="" class="img"/>`;
}

function getSlider(event) {
  const name = event.target.name;
  if(name === undefined || name === "") {return};
  // if(name === 'scale') {
  //   console.log(imageContainer.style)
  //   imageContainer.style.width = '200%;
  //   imageContainer.style.height = '140vw';
  //   return;
  // }
  index = name === 'forward' ? index + 1 : index;
  index = name === 'back' ? index - 1 : index;
  index = index > imageList.length - 1 ? 0 : index;
  index = index < 0 ? imageList.length - 1 : index;
  console.log(index);

  imageContainer.innerHTML = `<img src="${imageList[index]}" alt="" class="img"/>`;
}
