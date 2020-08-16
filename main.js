//nav disappear on scroll
const navbar = document.querySelector('.navbar'); 

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
  }


//burger
const burger = document.querySelector('#burger'); 
const bars = document.querySelector('#bars');
const links = document.querySelectorAll(".nav-link");
const linksArr = [...links];

linksArr.map(link => link.addEventListener('click', ()=> {
  burger.classList.toggle('burger-open');
  navbar.classList.toggle('navbar-open');
  bars.classList.toggle('bars-open');
}))

bars.addEventListener('click', ()=> {
  burger.classList.toggle('burger-open');
  navbar.classList.toggle('navbar-open');
  bars.classList.toggle('bars-open');
})


//slider

let currentSlideExamples = 1;
let currentSlideSteps = 1;
let currentSlideWorkshops = 1;

const maxExamplesSlides = 9;
const maxStepsSlides = 4;
const maxWorkshopsSlides = 3;

const slideContainerExamples = document.querySelector('.examples-container');
const slideContainerSteps = document.querySelector('.steps-container');
const slideContainerWorkshops = document.querySelector('.workshops-container');

const swipeTagExamples = document.querySelector("#examples-tag")
const swipeTagSteps = document.querySelector("#steps-tag")
const swipeTagWorkshops = document.querySelector("#workshops-tag")

const sliders = Array.from(document.querySelectorAll('.slider'));

let descriptions = [];
descriptions[1] = document.querySelector("#d1");
descriptions[2] = document.querySelector("#d2");
descriptions[3] = document.querySelector("#d3");
descriptions[4] = document.querySelector("#d4");

const goToSlide = (container, slideNumber) => {

  container.style.transform = "translateX(-" + (slideNumber-1)*92 + "vw)";
  if(container === slideContainerSteps){
    descriptions.map(description => description.style.display = "none");
    descriptions[slideNumber].style.display = "block";
  }
}

if(window.innerWidth <= 850){
 //swipe left

  sliders.map(slider => slider.addEventListener('click', ()=> {

    if(slider.nextElementSibling.className.indexOf('swipe-tag') != -1){
      slider.nextElementSibling.style.opacity = "0";
    };

    if(slider.id === 'examples-slider'){
      if(currentSlideExamples == maxExamplesSlides){
        return;
      } else {
        currentSlideExamples++;
        goToSlide(slideContainerExamples, currentSlideExamples)
      }
    } else if (slider.id === 'steps-slider'){
      if(currentSlideSteps == maxStepsSlides){
        return;
      } else {
        currentSlideSteps++;
        goToSlide(slideContainerSteps, currentSlideSteps)
      }
    } else if (slider.id === 'workshops-slider'){
      if(currentSlideWorkshops == maxWorkshopsSlides){
        return;
      } else {
        currentSlideWorkshops++;
        goToSlide(slideContainerWorkshops, currentSlideWorkshops)
      }
    };
  }))

  sliders.map(slider => slider.addEventListener('swiped-right', ()=> {

    if(slider.nextElementSibling.className.indexOf('swipe-tag') != -1){
      slider.nextElementSibling.style.opacity = "0";
    };

    if(slider.id === 'examples-slider'){
      if(currentSlideExamples == 1){
        return;
      } else {
        currentSlideExamples--;
        goToSlide(slideContainerExamples, currentSlideExamples)
      }
    } else if (slider.id === 'steps-slider'){
      if(currentSlideSteps == 1){
        return;
      } else {
        currentSlideSteps--;
        goToSlide(slideContainerSteps, currentSlideSteps)
      }
    } else if (slider.id === 'workshops-slider'){
      if(currentSlideWorkshops == 1){
        return;
      } else {
        currentSlideWorkshops--;
        goToSlide(slideContainerWorkshops, currentSlideWorkshops)
      }
    };
  }))
  
/*   //swipe left
  sliders.map.addEventListener('swiped-left', () => {
    swipeTagExamples.style.display = 'none';
    if(currentSlide == 4){
      return;
    } else {
      currentSlide++;
    }
    goToSlide(slideContainer, currentSlide);
  })  
  
  slideContainerExamples.addEventListener('click', () => {
    console.log('click')
    swipeTagExamples.style.display = 'none';
    if(currentSlide == 4){
      return;
    } else {
      currentSlide++;
    }
    goToSlide(slideContainer, currentSlide);
  })   */
  /* 
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
  
   */
  
}