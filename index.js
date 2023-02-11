let menuItems = document.querySelectorAll("a");
let length = menuItems.length;
let currentLocation = location.href;

let titleImg = document.querySelector(".title-img");
let titleDesc = document.querySelector(".title-desc");


menuItems.forEach( (item) => {
  if(currentLocation === item.href) {
    item.parentElement.className = "active"
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
