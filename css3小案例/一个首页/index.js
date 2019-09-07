function init () {
    bindEvent();
    $('#swiper').sliderImg({
        image: ['./img/1.jpg','./img/2.jpg','./img/3.jpg'],
        href: ['#', '#', '#']
    })
}
init();

function bindEvent () {
    $('.btn').on('click', function () {
        $('.header .list').show();
    });
    $('.header .list').on('mouseleave', function () {
        if (window.innerWidth <= 700) {
            $(this).hide();
        }
    });
    // 当浏览器尺寸发生大小时触发
    $(window).on('resize', function () {
        if (window.innerWidth > 700) {
            $('.header .list').show();
        }else if (window.innerWidth <= 700) {
            $('.header .list').hide();
        }
    });

    $('.header a').on('click', function () {
        var id = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(id).offset().top + "px"
        }, 500)
    })
}