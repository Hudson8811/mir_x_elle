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


    $('.site-header-menu__link').click(function () {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $('#start').offset().top }, 600);
    });


});
