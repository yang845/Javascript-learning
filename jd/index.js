$('#myJD').addDropdown({
    // 下拉列表中每一列的宽度
    colWidth: 126,
    // 下拉列表总宽度
    dropDownWidth: 280,
    direction: 'y',
    menuList: [{
        title: "",
        items: [{
            href: '#',
            name: '待处理订单',
        }, {
            href: '#',
            name: '消息',
        }, {
            href: '#',
            name: '返修退换货',
        }, {
            href: '#',
            name: '我的问答',
        }, {
            href: '#',
            name: '降价商品',
        }, {
            href: '#',
            name: '我的关注',
        }
        ],
    }, {
        title: '',
        items: [{
            href: '#',
            name: '我的京豆',
        }, {
            href: '#',
            name: '我的优惠券',
        }, {
            href: '#',
            name: '我的白条',
        }
        ],
    }]
});

$('.short-cut .w .position').addDropdown({
    dropDownWidth: 300,
    menuList: [{
        title: '',
        colWidth: 60,
        items:[{
            href: '',
            name: '北京',
        }, {
            href: '',
            name: '上海'
        }, {
            href: '',
            name: '天津'
        }, {
            href: '',
            name: '重庆',
        }, {
            href: '',
            name: '河北'
        }, {
            href: '',
            name: '山西'
        }, {
            href: '',
            name: '河南',
        }, {
            href: '',
            name: '辽宁'
        }, {
            href: '',
            name: '吉林',
        }, {
            href: '',
            name: '黑龙江',
        }, {
            href: '',
            name: '内蒙古'
        }, {
            href: '',
            name: '江苏',
        }, {
            href: '',
            name: '山东',
        }, {
            href: '',
            name: '安徽',
        }, { 
            href: '',
            name: '浙江'
        }, {
            href: '',
            name: '福建',
        }, {
            href: '',
            name: '湖北',
        }, {
            href: '',
            name: '湖南',
        }, {
            href: '',
            name: '广东',
        }, {
            href: '',
            name: '广西',
        }, {
            href: '',
            name: '江西'
        }, {
            href: '',
            name: '四川',
        }, {
            href: '',
            name: '海南'
        }, {
            href: '',
            name: '贵州'
        }, {
            href: '',
            name: '云南'
        }, {
            href: '',
            name: '西藏'
        }, {
            href: '',
            name: '陕西'
        }, {
            href: '',
            name: '甘肃'
        }, {
            href: '',
            name: '青海'
        }, {
            href: '',
            name: '宁夏'
        }, {
            href: '',
            name: '新疆'
        }, {
            href: '',
            name: '港澳'
        }, {
            href: '',
            name: '台湾'
        }, {
            href: '',
            name: '钓鱼岛'
        }, {
            href: '',
            name: '海外'
        }]
    }, {
        title: '',
        itemWidth: 262,
        colWidth: 262,
        items:[{
            href: '',
            name: '地区专享版本'
        }, {
            href: '',
            name: '中國港澳'
        }]
    }, {
        title: 'Available Sites',
        colWidth: 120,
        items:[{
            href: '',
            name: 'Global Site'    
        }, {
            href: '',
            name: 'Сайт России'
        }, {
            href: '',
            name: 'Situs Indonesia'
        }, {
            href: '',
            name: 'Sitio de España' 
        }, {
            href: '',
            name: 'เว็บไซต์ประเทศไทย'
        }]
    }]
})

$('#procurement').addDropdown({
    dropDownWidth: 140,
    colWidth: 56,
    menuList: [{
        title: '',
        items: [{
            href: '',
            name: '企业购'
        }, {
            href: '',
            name: '商用场景馆'
        }, {
            href: '',
            name: '工业品'
        }, {
            href: '',
            name: '礼品卡'
        }]
    }]
});


$('#service').addDropdown({
    title: '客户服务',
    colWidth: 70,
    dropDownWidth: 170,
    menuList: [{
        title: '客户',
        items: [{
            name: '帮助中心',
            href: ''
        }, {
            name: '售后服务',
            href: ''
        }, {
            name: '在线客服',
            href: '',
        }, {
            name: '意见建议',
            href: ''
        }, {
            name: '电话客服',
            href: ''
        }, {
            name: '客服邮箱',
            href: ''
        }, {
            name: '金融咨询',
            href: ''
        }, {
            name: '全球售客服'
        }]
    }, {
        title: '商户',
        items: [{
            name: '合作招商'
        }, {
            name: '学习中心'
        }, {
            name: '商家后台'
        }, {
            name: '京麦工作台'
        }, {
            name: '商家帮助'
        }, {
            name: '规则平台'
        }]
    }]
});

$('#bar-navs').addDropdown({
    direction: 'x',
    dropDownWidth: 1200,
    menuList: [{
        title: '特色主题',
        itemWidth: 340,
        colWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }, {
            name: '京东金融科技'
        }, {
            name: '陪伴计划'
        }, {
            name: '出海招商'
        }, {
            name: '拍拍'
        }]
    }, {
        title: '特色主题',
        itemWidth: 270,
        colWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }]
    }]
});

$('#swiper').swiper({
    imgList: ['https://img1.360buyimg.com/da/s590x470_jfs/t1/36626/1/11773/101331/5cf9fd07E20a31b94/57ae8abe34bebdd3.jpg!q90!cc_590x470.webp', 
                'https://img1.360buyimg.com/pop/s590x470_jfs/t1/59093/24/1607/97943/5cf64040E35019e3c/146d717401d191b4.jpg!q90!cc_590x470.webp',
                'https://img1.360buyimg.com/pop/s590x470_jfs/t1/54850/17/1372/95559/5cf22dbfE93749187/3e9ff5abd392ad9f.jpg!q90!cc_590x470.webp',
                'https://img20.360buyimg.com/babel/s590x470_jfs/t1/75044/39/1736/95484/5d00d14fE01e49b30/f9fb876af71a91bd.jpg!q90!cc_590x470.webp'],
    chengeBtn: true,
    animateType: 'fade',
    showPointBtn: true,
    isAuto: true
});

$('#swiper1').swiper({
    imgList: ['https://img10.360buyimg.com/mobilecms/s260x260_jfs/t1/83314/29/1628/131374/5cfe1ea2E97c5c178/9fe2d476786ccfed.jpg!q90!cc_130x130', 
                'https://img1.360buyimg.com/pop/s590x470_jfs/t1/59093/24/1607/97943/5cf64040E35019e3c/146d717401d191b4.jpg!q90!cc_590x470.webp',
            'https://img1.360buyimg.com/pop/s590x470_jfs/t1/54850/17/1372/95559/5cf22dbfE93749187/3e9ff5abd392ad9f.jpg!q90!cc_590x470.webp',
            'https://img20.360buyimg.com/babel/s590x470_jfs/t1/75044/39/1736/95484/5d00d14fE01e49b30/f9fb876af71a91bd.jpg!q90!cc_590x470.webp',
            'https://img10.360buyimg.com/mobilecms/s260x260_jfs/t1/83314/29/1628/131374/5cfe1ea2E97c5c178/9fe2d476786ccfed.jpg!q90!cc_130x130', 
                'https://img1.360buyimg.com/pop/s590x470_jfs/t1/59093/24/1607/97943/5cf64040E35019e3c/146d717401d191b4.jpg!q90!cc_590x470.webp',
            'https://img1.360buyimg.com/pop/s590x470_jfs/t1/54850/17/1372/95559/5cf22dbfE93749187/3e9ff5abd392ad9f.jpg!q90!cc_590x470.webp',
            'https://img20.360buyimg.com/babel/s590x470_jfs/t1/75044/39/1736/95484/5d00d14fE01e49b30/f9fb876af71a91bd.jpg!q90!cc_590x470.webp'
        ],
    animateType: 'animate',
    chengeBtn: true,
    imgWidth: 200,
    showImgWidth: 800,
    isAuto: true
})
$('#swiper2').swiper({
    imgList: ['https://img10.360buyimg.com/mobilecms/s260x260_jfs/t1/83314/29/1628/131374/5cfe1ea2E97c5c178/9fe2d476786ccfed.jpg!q90!cc_130x130', 
                'https://img1.360buyimg.com/pop/s590x470_jfs/t1/59093/24/1607/97943/5cf64040E35019e3c/146d717401d191b4.jpg!q90!cc_590x470.webp',
            'https://img1.360buyimg.com/pop/s590x470_jfs/t1/54850/17/1372/95559/5cf22dbfE93749187/3e9ff5abd392ad9f.jpg!q90!cc_590x470.webp',
        ],
    animateType: 'fade',
    chengeBtn: false,
    showPointBtn: false,
    isAuto: true
})

var menuList = [{
    title: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}];

// 左侧导航条功能
function renderLeftMenuList () {
    menuList.forEach(function (menu) {
        var oLi = $('<li></li>');
        menu.title.forEach(function (title, index) {
            $('<a href="#">' + title + '</a>').appendTo(oLi);
            if (index != menu.title.length - 1) {
                $('<span>/</span>').appendTo(oLi);
            }
        })
        $('#menu-list').append(oLi);
    })
}

function renderLeftMenuContent (data) {
    $('#menu-content').empty();
    var oUl = $('<ul class="tabs"></ul>');
    data.tabs.forEach(function (tab) {
        $('<li></li>').text(tab).appendTo(oUl);
    });
    var oDiv = $('<div class="item-content"></div>');
    data.subs.forEach(function (sub) {
        var oDl = $('<dl></dl>');
        $('<dt></dt>').text(sub.title).appendTo(oDl);
        var oDD = $('<dd></dd>');
        sub.items.forEach(function (item) {
            $('<a href="#">' + item + '</a>').appendTo(oDD);
        })
        oDl.append(oDD).appendTo(oDiv);
    })
    $('#menu-content').append(oUl).append(oDiv);
}

var hideTimer = null;
function leftMenuEvent () {
    $('#menu-list').on('mouseenter', 'li', function () {
        clearTimeout(hideTimer);
        var index = $(this).index();
        renderLeftMenuContent(menuList[index].content);
        $('#menu-content').show();

    }).on('mouseleave', 'li', function () {
        hideTimer = setTimeout(function () {
            $('#menu-content').hide();
        }, 300);
    })
    $('#menu-content').on('mouseenter', function () {
        clearTimeout(hideTimer);
    }).on('mouseleave', function () {
        hideTimer = setTimeout(function () {
            $('#menu-content').hide();
        }, 300);
    })
}

renderLeftMenuList();
leftMenuEvent();

// 用户服务功能
function serviceEvent () {
    $('.service-entry > ul').on('mouseenter', '.item-frame', function () {
        $('.service').addClass('service-extend');
        $('.service-entry > ul > .active').removeClass('active');
        $(this).addClass('active');
        var msg = $(this).find('span').text();
        $('.service-content').text(msg);
    });
    $('.close').click(function () {
        $('.service-extend').removeClass('service-extend');
        $('.service-entry ul').off('mouseenter');
        $('.service-entry > ul > .active').removeClass('active');
        serviceTimer = setTimeout(function () {
            serviceEvent();
        }, 500);
    });
}

function dealdata (res) {
    renderSearch(res);
}

var ajaxTimer = null;
// 搜索
function searchEvent () {
    $('.search-btn').click(function () {
        var val = $('#search-word').val();
        if (val) {
            $.ajax({
                type: "GET",
                url: "https://suggest.taobao.com/sug",
                data: {
                    code: 'utf-8',
                    q: val,
                    callback: 'dealdata'
                },
                dataType: "jsonp",
            });
        }
    });
    $('#search-word').keyup(function () {
        var val = $('#search-word').val();
        clearTimeout(ajaxTimer);
        if (val) {
            ajaxTimer = setTimeout(function () {
                $('.search-btn').trigger('click');
            }, 500)
        }else {
            $('#search-content').empty();
        }
    });
}

function renderSearch (res) {
    var oDiv = $('#search-content');
    oDiv.empty();
    var oUl = $('<ul></ul>');
    res.result.forEach(function (item) {
        $('<li><a href="#">' + item[0] + '</a></li>').appendTo(oUl);
    });
    oUl.appendTo(oDiv);
}

var seckillTimer = null;
function seckillGoods () {
    var timeDatas = {
        hour: '01',
        minute: '00',
        second: '02'
    }
    var oSk = $('.sk_cd .cd');
    for (var prop in timeDatas) {
        var oDiv = $('<div class="cd_item" id="' + prop + '"></div>');
        $('<span class="cd_item_txt">' + timeDatas[prop] + '</span>').appendTo(oDiv);
        oSk.append(oDiv);
    } 
    seckillTimer = setInterval(function () {
        var oHour = $('#hour span');
        var oMinute = $('#minute span');
        var oSecond = $('#second span');
        hour = parseInt(oHour.text());
        minute = parseInt(oMinute.text());
        second = parseInt(oSecond.text());
        if (second == 0) {
            second = 59;
            if (minute == 0) {
                minute = 59;
                if (hour == 0) {
                    hour = 23;
                }else {
                    hour --;
                }
            }else {
                minute --;
            }
        }else {
            second --;
        }
        oHour.text(hour < 10 ? '0' + hour : hour);
        oMinute.text(minute < 10 ? '0' + minute : minute);
        oSecond.text(second < 10 ? '0' + second : second);
        if (second == 0 && minute == 0 && hour == 0) {
            clearInterval(seckillTimer);
            console.log('秒杀开始！');
        }
    }, 1000);
}

searchEvent();
serviceEvent();
seckillGoods();