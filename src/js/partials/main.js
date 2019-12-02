$(document).ready(function() {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");

    $('.product__prod-pic, .prod-info').hover(function () {
       if ($(this).hasClass('product__prod-pic--1')) {
           $(this).addClass('hovered').siblings('.prod-info--1').addClass('hovered');
       } else if ($(this).hasClass('product__prod-pic--2')) {
           $(this).addClass('hovered').siblings('.prod-info--2').addClass('hovered');
       } else if ($(this).hasClass('prod-info--1')) {
           $(this).addClass('hovered').siblings('.product__prod-pic--1').addClass('hovered');
       } else if ($(this).hasClass('prod-info--2')) {
           $(this).addClass('hovered').siblings('.product__prod-pic--2').addClass('hovered');
       }
    }, function () {
        $('.product__prod-pic, .prod-info').removeClass('hovered');
    });


    $('.site-header-menu__link:not(.to-top)').click(function () {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $('#start').offset().top }, 600);
        $(this).addClass('active').siblings('.site-header-menu__link').removeClass('active');
        var tab = $(this).data('tab');
        $('.read-also-item[data-tab='+tab+']').addClass('active').siblings('.read-also-item').removeClass('active');
        $('.tab-content:not(#tab-content-'+tab+')').fadeOut(300, function () {
            $('#tab-content-'+tab).fadeIn(300);
        });
    });

    $('.read-also-item').click(function () {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $('#start').offset().top }, 600);
        $(this).addClass('active').siblings('.read-also-item').removeClass('active');
        var tab = $(this).data('tab');
        $('.site-header-menu__link[data-tab='+tab+']').addClass('active').siblings('.site-header-menu__link').removeClass('active');
        $('.tab-content:not(#tab-content-'+tab+')').fadeOut(300, function () {
            $('#tab-content-'+tab).fadeIn(300);
        });
    });

    $('.to-top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });


    $('.sidebar-cash-steps__step').click(function () {
        clearInterval(timerId);
        timer();
        if (!$(this).hasClass('active')){
            var step = $(this).data('step');
            $(this).addClass('active').siblings('.sidebar-cash-steps__step').removeClass('active');
            $('.sidebar-cash__reg.active').removeClass('active').fadeOut(150,function () {
                $('.sidebar-cash__reg[data-step='+step+']').fadeIn(150).addClass('active');
            });
        }
    });


    let timerId;
    timer();
    function timer() {
        timerId = setInterval(function () {
            nextPhone();
        }, 2300);
    }

    function nextPhone() {
        var active = $('.sidebar-cash-steps__step.active'),
            step = 0;
        if (active.is(':last-child')){
            var target = $('.sidebar-cash-steps__step:first-child');
            step = target.data('step')
        } else {
            var target = active.next();
            step = target.data('step');
        }
        target.addClass('active').siblings('.sidebar-cash-steps__step').removeClass('active');
        $('.sidebar-cash__reg.active').removeClass('active').fadeOut(150,function () {
            $('.sidebar-cash__reg[data-step='+step+']').fadeIn(150).addClass('active');
        });
    }


    $('.container__right .sidebar-cash').clone().appendTo("#mobile-mig");
    
    $('#mobile-fixed').click(function () {
        $.fancybox.open({
            src  : '.container__right .sidebar-cash',
            type : 'inline',
            toolbar  : false,
            smallBtn : true,
        });
    });

});
