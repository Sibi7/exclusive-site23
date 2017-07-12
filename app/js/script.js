$(document).ready(function () {
    $(".popular-services__body .animate1").animated("slideInUp");
    $(".popular-services__body .animate2").animated("slideInUp");
    $(".popular-services__body .animate3").animated("slideInUp");
    $(".popular-services__body .animate4").animated("slideInUp");
    $(".popular-services__body .animate5").animated("slideInUp");
    $(".popular-services__body .animate6").animated("slideInUp");
    $(".our-results__body .left").animated("slideInUp");
    $(".our-results__body .center").animated("slideInUp");
    $(".our-results__body .right").animated("slideInUp");
    $(".real-work__company__item").animated("zoomIn");
    /*clouds animation*/
    var x = 0;
    setInterval(function () {
        var pos = (x -= 1) + 'px 0';
        $('.header__absolute').css('background-position', pos);
    }, 40);
    /*close clouds animation*/
    var y = 0;
    setInterval(function () {
        var pos = (y += 1) + 'px 0';
        $('.header__absolute2').css('background-position', pos);
    }, 60);

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: true,
        navigation: true,
        navigationText: true,
        pagination: true,
        // autoplay: true,
        // autoplayTimeout: 5000,
        items: 3,
        dots: true,
        // singleItem: false,
        // mouseDrag: false,
        // touchDrag: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            },
            1200: {
                items: 3,
                nav: true
            }
        }
    });
    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
});
