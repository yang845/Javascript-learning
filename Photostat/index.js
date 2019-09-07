function init () {
    bindEvent();
}
init();
function bindEvent() {
    $('.navgation .navbar-nav li a').on('click', function (e) {
        var hash = $(this).attr('href');
        var top = $(hash).offset().top;
        var speed = 30;
        var a = 5;
        var timer = setInterval(function () {
            var scroll = $(window).scrollTop();
            if (scroll + speed >= top) {
                $(window).scrollTop(top);
                clearInterval(timer);
            }else {
                $(window).scrollTop(scroll + speed);
            }
            speed += a;
        }, 30);
        return false;
    });
}
