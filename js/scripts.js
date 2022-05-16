let sectionMain = document.getElementById("section-main");
let navbar = document.getElementById("navbar");
let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  let viewportHeight = window.innerHeight;
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
    sidenavid.style.borderTopRightRadius = "0px";
    // sectionMain.classList.add('navbarOffsetMargin');
  } else {
    navbar.classList.remove('sticky');
    sidenavid.style.borderTopRightRadius = "8px";
    // sectionMain.classList.remove('navbarOffsetMargin');
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
      element.style.boxShadow = "1px -1px 3px 1px #929498";
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
    if(element.style.borderBottomLeftRadius == "0px") {
      element.style.borderBottomLeftRadius = "8px";
    } else {
      element.style.borderBottomLeftRadius = "0px";
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

function toggleIcon(x) {
  if ($(window).width() > 768) {
    x.classList.toggle("iconoir-cancel");
    x.classList.toggle("iconoir-menu");
  } else {
    x.classList.toggle("none")
  }
}

// Get the modal
var modal = document.getElementById("connect-modal");

// Get the button that opens the modal
var btn = document.getElementById("connect-open");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeicon-2")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}