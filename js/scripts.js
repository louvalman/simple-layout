let sectionMain = document.getElementById("section-main");
let navbar = document.getElementById("navbar");

let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  let viewportHeight = window.innerHeight;
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
    sectionMain.classList.add('navbarOffsetMargin');
  } else {
    navbar.classList.remove('sticky');
    sectionMain.classList.remove('navbarOffsetMargin');
  }
});
