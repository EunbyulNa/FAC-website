let menuItems = document.querySelectorAll("a");
let length = menuItems.length;
let currentLocation = location.href;

menuItems.forEach( (item) => {
  if(currentLocation === item.href) {
    item.parentElement.className = "active"
    console.log(item.parentElement)
  }
})
