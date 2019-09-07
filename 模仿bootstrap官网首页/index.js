function init () {
    bindEvent();
}
init();
var ishide = true;
function bindEvent () {
    $('.nav-btn').on('click', function () {
        console.log(11111);
        if (ishide) {
            $('.contain .nav li').show();
            ishide = false;
        }else {
            $('.contain .nav li').hide();
            ishide = true;
        }
    });
    $(window).on('resize', function () {
        if (window.innerWidth > 768) {
            $('.contain .nav li:not(.hidden-sm)').show();
        }
    });
}