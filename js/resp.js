burger = document.querySelector(".burger");
console.log(burger);
navbar = document.querySelector(".navbar");
console.log(navbar);
leftNav = document.querySelector(".nav-left");
rightNav = document.querySelector(".nav-right");

burger.addEventListener("click", () => {
  navbar.classList.toggle("nav-height-for-resp");
  leftNav.classList.toggle("visibility-for-resp");
  rightNav.classList.toggle("visibility-for-resp");
});
