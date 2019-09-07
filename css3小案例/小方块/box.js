function init() {
    bindEvent();
}
init();

function bindEvent() {
    $('.cube').on('mouseenter', function (e) {
        addId(e, 'in', this);
        changeBg(this);
    }).on('mouseleave', function (e) {
        addId(e, 'out', this);
        $(this).on('animationend', function () {
            if ($(this).attr('id').indexOf('out') !== -1) {
                $(this).attr('id', '');
            }
        })
    })
}

function changeBg (item) {
    var color = $(item).attr('data-bg');
    $('.wrapper').attr('id', color);
}

function addId(e, status, item) {
    var d = getDir(e, item);
    var str = status;
    switch (d) {
        case 0:
            str += '-top';
            break;
        case 1:
            str += '-right';
            break;
        case 2:
            str += '-bottom';
            break;
        case 3:
            str += '-left';
            break;
    }
    $(item).attr('id', str);
}

function getDir(e, item) {
    var x = e.clientX - item.offsetLeft - item.offsetWidth / 2;
    var y = e.clientY - item.offsetTop - item.offsetHeight / 2;
    return (Math.round((Math.atan2(y, x) * 180 / Math.PI + 180) / 90) + 3) % 4;
}