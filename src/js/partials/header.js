$(document).ready(function () {
    var $headerP = $('.place-for-header');
    var $header = $('#masthead');

    $(document).on('scroll', function () {
        if (window.scrollY >= Math.round($headerP.position().top)) {
            $header.addClass('fixed');
        }
        else {
            $header.removeClass('fixed');
        }
    });
});
