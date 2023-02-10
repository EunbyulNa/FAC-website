let menuItems = document.querySelectorAll("a");
let length = menuItems.length;
let currentLocation = location.href;

let titleImg = document.querySelector(".title-img");
let titleDesc = document.querySelector(".title-desc");

let leftOne = document.querySelector("#leftOne");
let leftTwo = document.querySelector("#leftTwo");
let leftThree = document.querySelector("#leftThree");
let leftFour = document.querySelector("#leftFour");
let leftFive = document.querySelector("#leftFive");

let rightOne = document.querySelector("#rightOne");
let rightTwo = document.querySelectorAll("#rightTwo");
let rightThree = document.querySelectorAll("#rightThree");
let rightFour = document.querySelectorAll("#rightFour");
let rightFive = document.querySelector("#rightFive");

let folderImg= document.querySelector(".folder");
let paper = document.querySelector(".paper");


folderImg.addEventListener("mouseover", function () {
  paper.classList.add("position");
})

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

window.addEventListener("load", function () {
  setTimeout(function () {
    leftOne.style.marginLeft = '30px';
    leftOne.style.opacity = '1'
  });
});

window.addEventListener("load", function () {
  setTimeout(function () {
    rightOne.style.marginRight = '30px';
    rightOne.style.opacity = '1'
  }, 1300);
});

window.addEventListener("load", function () {
  setTimeout(function () {
    leftTwo.style.marginLeft = '30px';
    leftTwo.style.opacity = '1'
  }, 2900);
});

window.addEventListener("load", function () {
  rightTwo.forEach( (div) => {
    setTimeout(function () {
      div.style.marginRight = '30px';
      div.style.opacity = '1';
    }, 4400);
  });
});

window.addEventListener("load", function () {
  setTimeout(function () {
    leftThree.style.marginLeft = '30px';
    leftThree.style.opacity = '1'
  }, 6000);
});

window.addEventListener("load", function () {
  rightThree.forEach( (div) => {
    setTimeout(function () {
      div.style.marginRight = '30px';
      div.style.opacity = '1';
    }, 6500);
  });
});

window.addEventListener("load", function () {
  setTimeout(function () {
    leftFour.style.marginLeft = '30px';
    leftFour.style.opacity = '1'
  }, 7500);
});

window.addEventListener("load", function () {
  rightFour.forEach( (div) => {
    setTimeout(function () {
      div.style.marginRight = '30px';
      div.style.opacity = '1';
    }, 8000);
  });
});

window.addEventListener("load", function () {
  setTimeout(function () {
    leftFive.style.marginLeft = '30px';
    leftFive.style.opacity = '1'
  }, 8500);
});

window.addEventListener("load", function () {
  setTimeout(function () {
    rightFive.style.marginRight = '30px';
    rightFive.style.opacity = '1'
  }, 9500);
});
