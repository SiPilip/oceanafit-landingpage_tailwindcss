//SMOOTH ANCHOR
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//HAMBURGER
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//NAVBAR FIXED
window.onscroll = function () {
  const navbar = document.querySelector("header");
  const header = document.querySelector("#topestNav");
  const topTitleNav = document.querySelector("#topNav");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    navbar.classList.add("navbar-fixed");
    topTitleNav.classList.add("showTitle");
  } else {
    navbar.classList.remove("navbar-fixed");
    topTitleNav.classList.remove("showTitle");
  }
};
