let menuItems = document.querySelectorAll("a");
let length = menuItems.length;
let currentLocation = location.href;

let pencil = document.querySelector(".writing-img");
let textDeco = document.querySelector(".text-deco");

menuItems.forEach( (item) => {
  if(currentLocation === item.href) {
    item.parentElement.className = "active"
  };
});


window.addEventListener("load", function () {
    setTimeout(function () {
        pencil.style.marginLeft = '0'
        pencil.style.opacity = '1'
    }, 100);
  });
  

  window.addEventListener("load", function () {
    setTimeout(function () {
       textDeco.style.textDecoration = "underline wavy #22a4be"
    }, 700);
  });



  