$(document).ready(function () {
    //animate element 'animate css'
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
    var y = 0;
    setInterval(function () {
        var pos = (y += 1) + 'px 0';
        $('.header__absolute2').css('background-position', pos);
    }, 60);

    var z = 0;
    setInterval(function () {
        var pos = (z += 1) + 'px 0';
        $('.footer__absolute').css('background-position', pos);
    }, 60);
    //owl-carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        navigation: true,
        navigationText: true,
        pagination: true,
        autoplay: true,
        autoplayTimeout: 5000,
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

    //magnific-popup
    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
//    scroll menu
    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });
    //parallax mouse element
    var b = document.getElementsByClassName("footer__absolute-top")[0];

    b.addEventListener("mousemove", function(event) {
        parallaxed(event);

    });

    function parallaxed(e) {
        var amountMovedX = (e.clientX * -0.4 / 8);
        var amountMovedY = (e.clientY * -0.4 / 8);
        var x = document.getElementsByClassName("footer__absolute-top");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
        }
    }
    //parallax mouse element top
    var a = document.getElementsByClassName("header__absolute-top")[0];
    a.addEventListener("mousemove", function(event) {
        parallaxedTop(event);

    });

    function parallaxedTop(e) {
        var amountMovedX = (e.clientX * -0.4 / 8);
        var amountMovedY = (e.clientY * -0.4 / 8);
        var x = document.getElementsByClassName("header__absolute-top");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
        }
    }
//hamburger-menu
    $(document).ready(function () {
        var link =$('.menu-link');
        var link_active = $('.menu-link_active');

        link.click(function () {
            link.toggleClass('menu-link_active');
        })
    });
    $( ".menu-link" ).click(function() {
        $( ".header__nav__menu" ).slideToggle( "slow", function() {
        });
    });
});
