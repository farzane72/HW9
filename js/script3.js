"use strict";

//---------------------------------------------------
let slides = document.getElementsByClassName("slide");
let btnPrev = document.querySelector(".btn-prev");
let btnNext = document.querySelector(".btn-next");
let indexSlide = 1;

let timer = setInterval(startSlider,5000);

//------------------------- function slider section-----------------------

function displaySlider(n) {
  
  clearInterval(timer);
  timer = setInterval(startSlider,5000);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  indexSlide = indexSlide + n;
  if (indexSlide > slides.length) {
    indexSlide = 1;
  }
  if (indexSlide < 1) {
    indexSlide = slides.length;
  }
  slides[indexSlide - 1].style.display = "block";
  
}
function startSlider() {
  displaySlider(1);
}

//----------in function moshkel dasht----------------------------------------------
// function testTime() {
//   slides[indexSlide - 1].classList.add("slide-affect");
// }

//------------------------------------------------------------

btnNext.addEventListener("click", function (e) {
  let n = 1;
  displaySlider(1);
});
btnPrev.addEventListener("click", () => {
  let n = -1;
  displaySlider(-1);
});

//--------------------------------new solution----------------------
// let index = 0;
// function showSlide(n) {

//  slides[index].style.display="hidden";

//   index=index+n;
//   if(index < 0){
//     index=slides.length;
//   }
//   if(index>slides.length){
//     index=0;
//   }

//   slides[index].style.display="block";

// }
// showSlide(n);
