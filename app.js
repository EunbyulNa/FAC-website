
let menuLists = document.querySelectorAll("li");

menuLists.forEach( (li) => {
  li.addEventListener("click", function () {
    li.classList.add(".active");
  })
})
