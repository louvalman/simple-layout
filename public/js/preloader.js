// Preloader

const preloader = document.getElementById("preloader");
const fadeOutEffect = setInterval(() => {
    if (!preloader.style.opacity) {
        preloader.style.opacity = 1;
    }
    if (preloader.style.opacity > 0) {
        preloader.style.opacity -= 0.1;
    } else {
        clearInterval(fadeOutEffect);
        preloader.style.display = "none";
    }
}, 50);