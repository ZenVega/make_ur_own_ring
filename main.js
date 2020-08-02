const nxtBtn = document.querySelector(".next-btn");
const preBtn = document.querySelector(".prev-btn");

let descriptions = [];
descriptions[1] = document.querySelector("#d1");
descriptions[2] = document.querySelector("#d2");
descriptions[3] = document.querySelector("#d3");
descriptions[4] = document.querySelector("#d4");



const slider = document.querySelector(".slider");
const slideContainer = document.querySelector('.how-images');
let currentSlide = 1;


//next button
['click', 'mouseenter'].forEach(event => {
  nxtBtn.addEventListener(event, () => {
    if(currentSlide == 4){
      return;
    } else {
      currentSlide++;
    }
    goToSlide(currentSlide);
  })  
});

//prev button
['click', 'mouseenter'].forEach(event => {
  preBtn.addEventListener(event, () => {
    if(currentSlide == 1){
      return;
    } else {
      currentSlide--;
    }
    goToSlide(currentSlide);
  })
});

const goToSlide = (slideNumber) => {
    slideContainer.style.transform = "translateX(-" + (currentSlide-1)*22 + "vw)";
    descriptions.map(description => description.style.display = "none");
    descriptions[currentSlide].style.display = "block";
}