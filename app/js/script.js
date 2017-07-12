$(document).ready(function () {
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