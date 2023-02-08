let menuItems = document.querySelectorAll("a");
let length = menuItems.length;
let currentLocation = location.href;

let titleImg = document.querySelector(".title-img");
let titleDesc = document.querySelector(".title-desc");

let chat = document.querySelector(".chat");
let answer = document.querySelector(".answer");

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
