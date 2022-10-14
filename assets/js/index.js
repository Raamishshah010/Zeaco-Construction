// owl carousel init
$('.owl-carousel').owlCarousel({
    loop: true,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    // dots: true,
    stagePadding: -5,
    responsiveBaseElement: 'body',
    responsive: {
        0: {
            items: 1,
        },
        700: {
            items: 1,
        },
        1220: {
            items: 1,
        },
    },
});


$(document).ready(function () {

    $('.items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});