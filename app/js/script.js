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
});
