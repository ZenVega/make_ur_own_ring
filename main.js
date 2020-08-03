
const swipeTag = document.querySelector("#swipe-tag");

let descriptions = [];
descriptions[1] = document.querySelector("#d1");
descriptions[2] = document.querySelector("#d2");
descriptions[3] = document.querySelector("#d3");
descriptions[4] = document.querySelector("#d4");



const slider = document.querySelector(".slider");
const slideContainer = document.querySelector('.how-images');
let currentSlide = 1;


//swipe left
  slider.addEventListener('swiped-left', () => {
    swipeTag.style.display = 'none';
    if(currentSlide == 4){
      return;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
  })  
  
  slider.addEventListener('click', () => {
    swipeTag.style.display = 'none';
    if(currentSlide == 4){
      return;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
  })  

//swipe-right
  slider.addEventListener('swiped-right', () => {
    if(currentSlide == 1){
      return;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
  })

const goToSlide = (slideNumber) => {
  slideContainer.style.transform = "translateX(-" + (currentSlide-1)*92 + "vw)";
  descriptions.map(description => description.style.display = "none");
  descriptions[currentSlide].style.display = "block";
}

