let sectionMain = document.getElementById("section-main");
let navbar = document.getElementById("navbar");
let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  let viewportHeight = window.innerHeight;
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
    // sectionMain.classList.add('navbarOffsetMargin');
  } else {
    navbar.classList.remove('sticky');
    // sectionMain.classList.remove('navbarOffsetMargin');
  }
});

if($(window).width() > 600){
function toggleNav() {
  var element = document.getElementById("sidenavid");
  if (element.style.width == "350px") {
    element.style.width = "0px";
  } else {
    element.style.width = "350px";
  }

  var element = document.getElementById("main");
  if (element.style.marginLeft == "350px") {
    element.style.marginLeft = "0px";
  } else {
    element.style.marginLeft = "350px";
  }
  }
} else {
  function toggleNav() {
    var element = document.getElementById("sidenavid");
    if (element.style.width == "100%") {
      element.style.width = "0px";
    } else {
      element.style.width = "100%";
    }
    }
}

if($(window).width() > 600){
  function toggleIcon(x) {
    x.classList.toggle("fa-xmark");
    x.classList.toggle("fa-bars");
  }
  } else {
    x.classList.toggle("fa-bars")
    }
