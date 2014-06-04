//jQuery for page slow scrolling
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1600, 'easeInOutExpo');
        event.preventDefault();
    });
});

