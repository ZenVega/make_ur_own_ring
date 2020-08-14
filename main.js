//burger
const burger = document.querySelector('#burger'); 
const bars = document.querySelector('#bars');
const navbar = document.querySelector('.navbar'); 


bars.addEventListener('click', ()=> {
  burger.classList.toggle('burger-open');
  navbar.classList.toggle('navbar-open');
  bars.classList.toggle('bars-open');
})

//slider
const swipeTag = document.querySelector("#swipe-tag");
const swipeTagExample = document.querySelector("#swipe-tag-examples");

let descriptions = [];
descriptions[1] = document.querySelector("#d1");
descriptions[2] = document.querySelector("#d2");
descriptions[3] = document.querySelector("#d3");
descriptions[4] = document.querySelector("#d4");

if(window.innerWidth <= 850){

  const goToSlide = (container, slideNumber) => {
    container.style.transform = "translateX(-" + (slideNumber-1)*92 + "vw)";
    if(container === slideContainer){
      descriptions.map(description => description.style.display = "none");
      descriptions[slideNumber].style.display = "block";
    }
  }
  //SLIDER HOW
  
  let currentSlide = 1;
  const slider = document.querySelector(".slider");
  const slideContainer = document.querySelector('.how-images');
  
  //swipe left
  slider.addEventListener('swiped-left', () => {
    swipeTag.style.display = 'none';
    if(currentSlide == 4){
      return;
    } else {
      currentSlide++;
    }
    goToSlide(slideContainer, currentSlide);
  })  
  
  slider.addEventListener('click', () => {
    swipeTag.style.display = 'none';
    if(currentSlide == 4){
      return;
    } else {
      currentSlide++;
    }
    goToSlide(slideContainer, currentSlide);
  })  
  
  //swipe-right
  slider.addEventListener('swiped-right', () => {
    if(currentSlide == 1){
      return;
    } else {
      currentSlide--;
    }
    goToSlide(slideContainer, currentSlide);
  })
  
  
  //SLIDER EXAMPLES
  
  let currentExampleSlide = 1;
  const sliderExamples = document.querySelector(".slider-examples");
  const slideContainerExamples = document.querySelector('.about-images');
  
  //swipe left
  sliderExamples.addEventListener('swiped-left', () => {
    swipeTagExample.style.display = 'none';
    if(currentExampleSlide == 9){
      return;
    } else {
      currentExampleSlide++;
    }
    goToSlide(slideContainerExamples, currentExampleSlide);
  })  
  
  sliderExamples.addEventListener('click', () => {
    swipeTagExample.style.display = 'none';
    if(currentExampleSlide == 9){
      return;
    } else {
      currentExampleSlide++;
    }
    goToSlide(slideContainerExamples, currentExampleSlide);
  })  
  
  //swipe-right
  sliderExamples.addEventListener('swiped-right', () => {
    if(currentExampleSlide == 1){
      return;
    } else {
      currentExampleSlide--;
    }
    goToSlide(slideContainerExamples, currentExampleSlide);
  })
  
  
  
}