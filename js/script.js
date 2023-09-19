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


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})