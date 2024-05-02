const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const hamburger = document.querySelector(".ri-menu-line");
const close = document.querySelector(".ri-close-line ");

navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
  close.classList.toggle("close")
  hamburger.classList.toggle("hamburger")

});
