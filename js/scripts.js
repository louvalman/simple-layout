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

window.addEventListener("scroll", e => {
  let viewportHeight = window.innerHeight;
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    sidenavid.classList.add('sticky');
  } else {
    sidenavid.classList.remove('sticky');
  }
});

function toggleNav() {
  var element = document.getElementById("sidenavid");
  if (element.style.width == "250px"){
    element.style.width = "0px";
  } else {
    element.style.width = "250px";
  }
  var element = document.getElementById("main");
  if (element.style.marginLeft == "250px"){
    element.style.marginLeft = "0px";
  } else {
    element.style.marginLeft = "250px";
  }
}


function toggleIcon(x) {
  x.classList.toggle("fa-xmark");
  x.classList.toggle("fa-bars");
}