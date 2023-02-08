let menuItems = document.querySelectorAll("a");
let length = menuItems.length;
let currentLocation = location.href;

let titleImg = document.querySelector(".title-img");
let titleDesc = document.querySelector(".title-desc");

let chat = document.querySelector(".chat");
let chatTwo = document.querySelector(".chatTwo");
let chatThree = document.querySelector(".chatThree");
let chatFour = document.querySelector(".chatFour");
let chatFive = document.querySelector(".chatFive");

let answer = document.querySelector(".answer");
let answerTwo = document.querySelector(".answerTwo");
let answerThree = document.querySelector(".answerThree");
let answerFour = document.querySelector(".answerFour");
let answerFive = document.querySelector(".answerFive");
let answerSix = document.querySelector(".answerSix");
let answerSeven = document.querySelector(".answerSeven");
let answerEight = document.querySelector(".answerEight");
let answerNine = document.querySelector(".answerNine");




menuItems.forEach( (item) => {
  if(currentLocation === item.href) {
    item.parentElement.className = "active"
    console.log(item.parentElement)
  };
});

window.addEventListener("load", function() {
  titleImg.style.marginTop = 0;
  titleImg.style.opacity = '1';
});

window.addEventListener("load", function () {
  setTimeout(function () {
    titleDesc.style.marginTop = 0;
    titleDesc.style.opacity = '1'
  }, 1300);
});

window.addEventListener("load", function() {
  chat.style.marginLeft= "30px";
  chat.style.opacity = '1';
});

window.addEventListener("load", function () {
  setTimeout(function () {
    answer.style.marginRight = "30px";
    answer.style.opacity = '1'
  }, 1300);
});


window.addEventListener("load", function () {
  setTimeout(function () {
    chatTwo.style.marginLeft = "30px";
    chatTwo.style.opacity = '1'
  }, 4000);
});

window.addEventListener("load", function () {
  setTimeout(function () {
    answerTwo.style.marginRight = "30px";
    answerTwo.style.opacity = '1'
    answerThree.style.marginRight = "30px";
    answerThree.style.opacity = '1'
    answerFour.style.marginRight = "30px";
    answerFour.style.opacity = '1'
  }, 5400);
});

window.addEventListener("load", function () {
  setTimeout(function () {
    chatThree.style.marginLeft = "30px";
    chatThree.style.opacity = '1';
    answerFive.style.marginRight = "30px";
    answerFive.style.opacity = '1';
    answerSix.style.marginRight = "30px";
    answerSix.style.opacity = '1';
    chatFour.style.marginLeft = "30px";
    chatFour.style.opacity = '1';
    answerSeven.style.marginRight = "30px";
    answerSeven.style.opacity = '1';
    answerEight.style.marginRight = "30px";
    answerEight.style.opacity = '1';
    chatFive.style.marginLeft = "30px";
    chatFive.style.opacity = '1';
    answerNine.style.marginRight = "30px";
    answerNine.style.opacity = '1';

  }, 6400);
});
