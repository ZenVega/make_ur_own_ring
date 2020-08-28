


let mobile = (window.innerWidth <= 850);

window.addEventListener('resize', () => {
  mobile = window.innerWidth <= 850;
  AOS.refresh();
})

const navbar = document.querySelector('.navbar'); 


if(mobile){

//burger
const burger = document.querySelector('#burger'); 
const links = document.querySelectorAll(".nav-link");
const container = document.querySelector('.container');
const linksArr = [...links];
const hoverBox = document.querySelector('#hover-box');

linksArr.map(link => link.addEventListener('click', ()=> {
  burger.classList.toggle('burger-open');
  navbar.classList.toggle('navbar-open');
  container.classList.toggle('container-open');
}))

hoverBox.addEventListener('click', ()=> {
  burger.classList.toggle('burger-open');
  navbar.classList.toggle('navbar-open');
  container.classList.toggle('container-open');
})

}

const goToSlide = (container, slideNumber) => {
  
  container.style.transform = "translateX(-" + (slideNumber-1)*92 + "vw)";
  if(container === slideContainerSteps){
    descriptions.map(description => description.style.display = "none");
    descriptions[slideNumber].style.display = "block";
  }
}

  //example-modal
const modal = document.querySelector('#example-modal');
const exitBtn = document.querySelector('#close-button');
const arrowL = document.querySelector('#arrow-left');
const arrowR = document.querySelector('#arrow-right');
const imageArray = Array.from(document.querySelectorAll('.example-image'));
let currentIndex;

exitBtn.addEventListener('click', ()=> modal.style.display = "none" );

const openModal = (index) => {
  currentIndex = index;
  let src = imageArray[index].src; 
  modal.style.backgroundImage = `url(${src})`; 
  modal.style.display = "block"; 
}


if(mobile){
  imageArray.map((image, index) => {
    const indexOfImage = index;
    const src = image.src;
    image.addEventListener('click', () => {
      openModal(indexOfImage);
    })
  });

  arrowR.addEventListener('click', ()=> {
    if(currentIndex === imageArray.length-1){
      openModal(0)
    } else {
      openModal(currentIndex + 1)
    }
  })
  arrowL.addEventListener('click', ()=> {
    if(currentIndex === 0){
      openModal(imageArray.length-1)
    } else {
      openModal(currentIndex - 1)
    }
  })
  
  
}
