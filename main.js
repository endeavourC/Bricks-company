function toggleMenu() {
    $('#nav-icon').toggleClass('open');
    $('nav').toggleClass('toggle');
}

function togglePrimaryMenu() {
    $('.primary-list').toggleClass('toggle');
    if ($('.primary-list').hasClass('toggle')) {
        $('.primary-list').css({
            overflow: 'visible',
        })
    } else {
        $('.primary-list').css({
            overflow: 'hidden',
        })
    }
}
$('#nav-icon-container').on('click', toggleMenu);
$('.products-list').on('click', togglePrimaryMenu);



function clearfx(element, name) {
    return $(element).removeClass(name);
}
$('.bramy-product').on('click', function () {
    $(this).toggleClass('show').siblings('div').removeClass('show');
    $('.bramy-product h3,.bramy-product>ul>li,.bramy-product > p').css({
        opacity: 0,
    })
    if ($(this).hasClass('show')) {
        clearfx('.bramy-product', 'show')
        $(this).addClass('show');
        $(this).find('p,li,h3').css({
            opacity: 1,
        })
    } else {
        $(this).find('p,li,h3').css({
            opacity: 0,
        })

    }

})
