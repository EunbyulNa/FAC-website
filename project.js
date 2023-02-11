let menuItems = document.querySelectorAll("a");
let length = menuItems.length;
let currentLocation = location.href;

let folders= document.querySelectorAll(".folderfront");
let pages = document.querySelectorAll(".page");

menuItems.forEach( (item) => {
  if(currentLocation === item.href) {
    item.parentElement.className = "active"
  };
});

folders.forEach( (folder) => {
  folder.addEventListener("mouseover", function () {
    folder.parentElement.nextElementSibling.style.top = "-60px"
  });
});

folders.forEach( (folder) => {
  folder.addEventListener("mouseout", function () {
    folder.parentElement.nextElementSibling.style.top = "20px"
  });
});


pages.forEach( (page) => {
  page.addEventListener("mouseover", function () {
    page.style.top = "-60px";
  });
});

pages.forEach( (page) => {
  page.addEventListener("mouseout", function () {
    page.style.top = "20px";
  });
});
