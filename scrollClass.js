    function changeActiveClass() {
        var position = pageYOffset + 70;
        if (position > $('.came-connect').offset().top && position < $('.contact').offset().top) {
            $('.main-list li a').removeClass('active');
            $('.came-connect-href').addClass("active");
        } else if (position > $('.contact').offset().top) {
            $('.main-list li a').removeClass("active");
            $('.contact-href').addClass("active");
        } else if (position < $('.came-connect').offset().top) {
            $('.main-list li a').removeClass("active");
            $('.home').addClass('active');

        }
    }
    $(window).on('scroll', changeActiveClass)