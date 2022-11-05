let input = document.querySelector(".input");
let search = document.querySelector(".search");
let close = document.querySelector(".close");

function openip() {
  input.classList.toggle("input-clicked");
  search.classList.toggle("search-off");
  close.classList.toggle("close-on");
  //   search.style.display = "none";
  //   close.style.display = "block";
}
