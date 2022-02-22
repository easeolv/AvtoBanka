$(document).ready(function () {
    var input = document.querySelector(".phone-input1");
    window.intlTelInput(input, {
        separateDialCode: true,
        defaultCountry: 'auto'
    });

    // var input2 = document.querySelector(".phone-input2");
    // window.intlTelInput(input2, {
    //     separateDialCode: true,
    //     defaultCountry: 'auto'
    // });

    var input3 = document.querySelector(".phone-input3");
    window.intlTelInput(input3, {
        separateDialCode: true,
        defaultCountry: 'auto'
    });

    var input4 = document.querySelector(".phone-input4");
    window.intlTelInput(input4, {
        separateDialCode: true,
        defaultCountry: 'auto'
    });

    var input5 = document.querySelector(".phone-input5");
    window.intlTelInput(input5, {
        separateDialCode: true,
        defaultCountry: 'auto'
    });

    var input6 = document.querySelector(".phone-input6");
    window.intlTelInput(input6, {
        separateDialCode: true,
        defaultCountry: 'auto'
    });

});
$(document).ready(function () {
    var input7 = document.querySelector(".phone-input7");
    window.intlTelInput(input7, {
        separateDialCode: true,
        defaultCountry: 'auto'
    });

    var input8 = document.querySelector(".phone-input8");
    window.intlTelInput(input8, {
        separateDialCode: true,
        defaultCountry: 'auto'
    });
});


$('.reviews-slider').slick({
    slidesToShow: 1,
    dots: true,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }
    ]
});

$('.home-slider').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
});

$(document).ready(function () {
    $(".js-tab-trigger").click(function () {
        var id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');

        $('.js-tab-trigger.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2

        $('.js-tab-content.active').removeClass('active'); // 3
        content.addClass('active'); // 4
    })
});


//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//плавный скролл end

// mobile menu
$('.btn-burger').on('click', function () {
    $('.overlay-menu').fadeIn();
    $('.mobile-menu').fadeIn();
});

$('.btn-close, .overlay-menu').on('click', function () {
    $('.mobile-menu').fadeOut();
    $('.overlay-menu').fadeOut();
});

// slick active
$(window).on('load resize', function () {
    if ($(window).width() < 992) {
        $('.lucrative-ransom-slider:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            arrows: false
        });
    } else {
        $(".lucrative-ransom-slider.slick-initialized").slick("unslick");
    }
    if ($(window).width() < 576) {
        $('.category-auto-slider:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            arrows: false
        });
    } else {
        $(".category-auto-slider.slick-initialized").slick("unslick");
    }
});
// slick active

$('.btn-close-cookie').on('click', function (e) {
    e.preventDefault();
    $('.cookie').fadeOut();
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 65) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});