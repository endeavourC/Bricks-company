$('.services-list li, .services h3,.about-text,.about img,.offer h3, .offer article img, .offer-text,.creating-process,#contact-form input,.contact article h3').addClass('hidden');
$(window).on('load', function () {

    $('.page-loader').fadeOut(700);
    const pageSlider = {
        slideLength: $('.slider-container').children().length,
        slider: $('.slider-container'),
        easingTime: 700,
        easing: 'easeInOutExpo',
        rightBtn: $('.fa-arrow-right'),
        leftBtn: $('.fa-arrow-left'),
        interval: null,
        intervalTime: 3000,
        slidein: function () {
            let elements = $('.slider-container').find('.slideshow');
            if (!this.slider.is(":animated")) {
                this.slider.animate({
                    marginLeft: '-100vw',
                }, this.easingTime, this.easing, function () {
                    elements.last().after(elements.first());
                    this.slider.css({
                        marginLeft: 0,
                    })
                }.bind(this))
            }
        },
        switchRight: function () {
            this.rightBtn.on('click', function (elements) {
                clearInterval(this.interval);
                elements = $('.slider-container').find('.slideshow');
                if (!this.slider.is(":animated")) {
                    this.slider.animate({
                        marginLeft: '-100vw',
                    }, this.easingTime, this.easing, function () {
                        elements.last().after(elements.first());
                        this.slider.css({
                            marginLeft: 0,
                        })
                    }.bind(this))
                    this.interval = setInterval(function () {
                        this.slidein();
                    }.bind(this), this.intervalTime);
                }
            }.bind(this))
        },
        switchLeft: function () {
            this.leftBtn.on('click', function (elements) {
                clearInterval(this.interval);
                elements = $('.slider-container').find('.slideshow');
                if (!this.slider.is(":animated")) {
                    this.slider.css({
                        marginLeft: '-100vw',
                    })
                    elements.first().before(elements.last());
                    this.slider.animate({
                        marginLeft: 0,
                    }, this.easingTime, this.easing);
                    this.interval = setInterval(function () {
                        this.slidein();
                    }.bind(this), this.intervalTime)
                }
            }.bind(this))
        },
        doInterval: function () {
            $(window).on('focus', function () {
                this.interval = setInterval(function () {
                    this.slidein();
                }.bind(this), this.intervalTime)
            }.bind(this));
            $(window).on('blur', function () {
                clearInterval(this.interval);
            }.bind(this))
            this.interval = setInterval(function () {
                this.slidein();
            }.bind(this), this.intervalTime)
        },
        start: function () {
            this.switchRight();
            this.switchLeft();
            this.doInterval();
        }

    }
    pageSlider.start();

    function resizeHeader() {
        if (pageYOffset > 0) {
            $('.page-header').height(60)
        } else {
            $('.page-header').height(80)
        }
    };

    function showElements(elements, mode, del) {
        let offset = pageYOffset;
        let height = $(window).height();
        let position = elements.offset().top;
        let method = mode;
        let distance = 300;
        let elToShow = elements;
        if (method != undefined) {
            if (position != undefined) {
                if (offset - distance > position - height) {
                    elements.removeClass(del);
                    elements.addClass(method);
                }
            }
        }
    }

    function moveTo(e, ahref) {
        e.preventDefault();
        $('#nav-icon').removeClass('open');
        $('.page-navigation').removeClass('active');
        ahref = $(this).attr('href');
        if (!$('body,html').is(':animated')) {

            $('body,html').animate({
                scrollTop: $(ahref).offset().top - 60 + 'px',
            }, 1000, 'easeInOutExpo')
        }
    }
    $('.page-navigation ul li a').on('click', moveTo);

    function toggleMenu() {
        $('#nav-icon').toggleClass('open');
        $('.page-navigation').toggleClass('active');
    };
    $('#nav-icon-container').on('click', toggleMenu)
    $(window).on('scroll', function () {
        resizeHeader();
        showElements($('.services-list li'), 'fadeIn', 'hidden');
        showElements($('.services h3'), 'fadeInLeft', 'hidden');
        showElements($('.about-text'), 'fadeInLeft', 'hidden');
        showElements($('.about img'), 'fadeInLeft', 'hidden');
        showElements($('.offer h3'), 'fadeInTop', 'hidden');
        showElements($('.offer article img'), 'fadeInLeft', 'hidden');
        showElements($('.offer-text'), 'fadeInTop', 'hidden');
        showElements($('.creating-process'), 'fadeInLeft', 'hidden');
        showElements($('#contact-form input'), 'fadeInLeft', 'hidden');
        showElements($('.contact article h3'), 'fadeInTop', 'hidden');



    })

});
