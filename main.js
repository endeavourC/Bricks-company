$(window).on('load', function () {
    $('.page-loader').fadeOut(600);
    let sliderCounter = 0;

    function startSlider() {
        let elements = $('.slideshow').find('div');
        let sliderTimer = 3500;
        let startInterval = false;
        let slideIn = function () {
            if (sliderCounter === 3) {
                sliderCounter = -1;
            }
            sliderCounter++;
            elements.eq(sliderCounter).fadeIn(800).siblings('div').fadeOut(800);
        }
        $(window).on('blur', function () {
            clearInterval(startInterval);
            startInterval = false;

        });
        $(window).on('focus', function () {
            startInterval = setInterval(function () {
                slideIn();
            }, sliderTimer)
        })
        startInterval = setInterval(() => {
            slideIn();
        }, sliderTimer)

    }
    startSlider();

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

    function toggleMenu() {
        $('#nav-icon').toggleClass('open');
        $('nav').toggleClass('toggle');
    }

    function togglePrimaryMenu() {
        $('.primary-list').toggleClass('toggle');
    }
    $('#nav-icon-container').on('click', toggleMenu);
    $('.products-list').on('click', togglePrimaryMenu);


    function scrollTo(e, element) {
        if (!$(this).is(':animated')) {
            element = $(this).data('name');
            $('nav').removeClass('toggle');
            $('#nav-icon').removeClass('open');
            return $('body,html').animate({
                scrollTop: $('.' + element).offset().top - 60 + 'px',
            }, 500, "swing")
        } else {
            return false;
        }


    }
    $('.main-list li a').on('click', scrollTo)

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
})
