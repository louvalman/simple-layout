let sectionMain = document.getElementById("section-main");
let navbar = document.getElementById("navbar");
let navPos = navbar.getBoundingClientRect().top;

// Light and dark mode toggle and save selection in local storage

const setTheme = (theme) => {
  document.documentElement.className = theme;
  localStorage.setItem('theme', theme);
}

const getTheme = () => {
  const theme = localStorage.getItem('theme');
  theme && setTheme(theme);
}

getTheme();

// Navbar JS

window.addEventListener("scroll", e => {
  let viewportHeight = window.innerHeight;
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

if ($(window).width() > 768) {
  function toggleNav() {
    var element = document.getElementById("sidenavid");
    if (element.style.width == "350px") {
      element.style.width = "0px";
    } else {
      element.style.width = "350px";
    }

    var element = document.getElementById("sidenavid");
    if (element.style.width == "350px") {
      element.style.boxShadow = "0 0 2px 0 rgb(111 111 111 / 8%), 0 0 4px 0 rgb(111 111 111 / 2%), 0 0 5px 4px rgb(111 111 111 / 6%)";
    } else {
      element.style.boxShadow = "none";
    }

    var element = document.getElementById("main");
    if (element.style.marginLeft == "350px") {
      element.style.marginLeft = "0px";
    } else {
      element.style.marginLeft = "350px";
    }

    var element = document.getElementById("navbar");
    if (element.style.borderBottomLeftRadius == "0px") {
      element.style.borderBottomLeftRadius = "8px";
    } else {
      element.style.borderBottomLeftRadius = "0px";
    }

    var element = document.getElementById("logotop");
    if (element.style.opacity == "0") {
      element.style.opacity = "1";
    } else {
      element.style.opacity = "0";
    }

    var element = document.getElementById("logotopside");
    if (element.style.opacity == "1") {
      element.style.opacity = "0";
    } else {
      element.style.opacity = "1";
    }

    var element = document.getElementById("closesidenav");
    if (element.style.opacity == "1") {
      element.style.opacity = "0";
    } else {
      element.style.opacity = "1";
    }

    var element = document.getElementById("sidetoggle");
    if (element.style.display == "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }

    var element = document.getElementById("alert-box");
    if (element.style.marginLeft == "175px") {
      element.style.marginLeft = "0px";
    } else {
      element.style.marginLeft = "175px";
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



// Get the modal
var modal = document.getElementById("connect-modal");

// Get the button that opens the modal
var btn = document.getElementById("connect-open");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeicon-2")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Slick carousel 

$(document).ready(function () {
  $('.slick-content').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1200,
    variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

// FAQ accordion functionality

var acc = document.querySelectorAll(".accordion");

acc.forEach(function (el) {
  el.addEventListener("click", function (e) {
    this.classList.toggle("active");
    let icon = this.querySelector("i");
    icon.classList.toggle("iconoir-nav-arrow-right");
    icon.classList.toggle("iconoir-nav-arrow-down");
    let panelAccordion = this.nextElementSibling;
    if (panelAccordion.style.maxHeight) {
      panelAccordion.style.maxHeight = null;
    } else {
      panelAccordion.style.maxHeight = panelAccordion.scrollHeight + "px";
    }
  });
});