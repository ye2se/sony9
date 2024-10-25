$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://www.youtube.com/watch?v=P648TE8dzYY',
        containment: '.u_box',
        autoPlay: true,
        mute: true,
        showControls: false,
        playOnlyIfVisible: true,
        optimizeDisplay: true,
        opacity: 0.9,
        useOnMobile: true,
        startAt: 5,
        stopAt: 53,
    })
})

$(function () {
    const MainProduct = new Swiper('.main_product_slide', {
        slidesPerView: "auto",
        spaceBetween: 210,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.main_product .product_inner .arrows .next',
            prevEl: '.main_product .product_inner .arrows .prev',
        },
        pagination: {
            el: '.page',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return '0' + number;
            },
            formatFractionTotal: function (number) {
                return '0' + number;
            },
        },

        on: {
            slideChangeTransitionStart: function () {
                $('.main_product .page').removeClass('on')
            },
            slideChangeTransitionEnd: function () {
                $('.main_product .page').addClass('on')
            },
        },

        Breakpoints: {
            768: {
                slidesPerView: "1",
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
            },
        }
    })
})

$(function () {
    $('.main_hot .inner .tab_menu button').on('click', function () {
        let idx = $(this).parent().index();
        console.log(idx)
        $('.main_hot .tab_content .itm')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this).parent().addClass('on').siblings().removeClass('on')
    })
});


$(function () {
    $('.main_hot .dots button').on('mouseenter', function () {
        let idx = $(this).index();

        $(this).addClass('on').siblings().removeClass('on');
        $(this).parent().next().find('img').removeClass('on');
        $(this).parent().next().find('img').eq(idx).addClass('on')

    })
})

$(function () {
    const MainEvent = new Swiper('.main_event_slide', {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_event .arrows .next',
            prevEl: '.main_event .arrows .prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            360: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20,

            },
            500: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            530: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

            1120: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },

            1410: {
                slidesPerView: "auto",
                spaceBetween: 30,
            }
        },

    });
})

$(window).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.to_top').fadeIn(500);
        } else {
            $('.to_top').fadeOut(500);
        }
    });

    $(".to_top").click(function () {
        $('html, body').animate({ scrollTop: 0 }, '1000');
    });

});

$(function () {
    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    })

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().slideToggle();
        }
    })

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('.header .gnb>ul>li .sub').removeAttr('style')
    })
})

$(function () {
    const MainHot = new Swiper('.tab_slide', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        scrollbar: {
            el: ".bar",
            hide: false,
            draggable: true,
            dragSize: 100,
            loop: true,
        },
        loopedSlides: 1,

        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 20,

            },
            480: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            580: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

            1120: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },

            1410: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        },
    })

})