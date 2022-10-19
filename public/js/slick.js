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
        ]
    });
});