const acc = document.querySelectorAll('.accordion'),
      panel = document.querySelector('.panel'),
      add = document.querySelector('.add');

acc.forEach(accButton => {
  accButton.addEventListener('click', function(e) {
    accButton.nextElementSibling.style.maxHeight === '0px'? accButton.nextElementSibling.style.maxHeight = '532px': accButton.nextElementSibling.style.maxHeight = '0px';


    accButton.nextElementSibling.hasAttribute('hidden')? accButton.nextElementSibling.removeAttribute('hidden'): accButton.nextElementSibling.setAttribute('hidden', '');
    e.target.children[0].classList.toggle('add-active');
    // add.classList.toggle('add-active');
  });
});






//Slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const numSlides = slides.length;

function showSlide(index) {
  const offset = -index * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % numSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + numSlides) % numSlides;
  showSlide(currentIndex);
}