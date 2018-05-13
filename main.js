    $('.about-header,.about-info,.f,.left-side-offer-content,.contact h1,.image-one,.image-three,.image-six,.image-eight').addClass('fadeout');

    $(window).on('load', function () {
        $('.loader').fadeOut(600);
        const hamburgerBtn = $('div#nav-icon-container');
        const mainSliderArray = [$('div.image-first'), $('div.image-second')];
        hamburgerBtn.on('click', function () {
            $('#nav-icon').toggleClass('open');
            $('header nav').toggleClass('transformed-nav');
            $('main').toggleClass('transformed-main');
        });
        let navigationLink = $('nav ul li a');

        function moveTo(data) {
            setTimeout(function () {
                $('#nav-icon').removeClass('open');
                $('header nav').removeClass('transformed-nav');
                $('main').removeClass('transformed-main');
            }, 500)
            data = $(this).data('name');
            $('body,html').animate({
                scrollTop: $('.' + data).offset().top - 80 + 'px'
            }, 500, 'swing')
        };


        $('.start').on('click', function () {
            $('html,body').animate({
                scrollTop: $('.about').offset().top - 80 + 'px',
            }, 1000, 'swing');
        })
        navigationLink.on('click', moveTo);
        $(window).on('scroll', function () {
            let about = $('.about').offset().top;
            let offer = $('.offer').offset().top;
            let gallery = $('.gallery').offset().top;
            let contact = $('.contact').offset().top;
            let pg = pageYOffset;
            if (pg + 300 > about && pg < offer) {
                $('.about-header').addClass('fadein').removeClass('fadeout');
                $('.about-info').addClass('fadein').removeClass('fadeout');
            };
            if (pg + 300 > offer && pg < gallery) {
                $('.f').addClass('fadein').removeClass('fadeout');
            };
            if (pg + 200 > $('.offer-features').offset().top && pg < gallery) {
                $('.left-side-offer-content').addClass('fadein').removeClass('fadeout')
            };
            if (pg + 300 > gallery && pg < contact) {
                $('.image-one,.image-three,.image-six,.image-eight').addClass('fadein').removeClass('fadeout')
            }
            if (pg + 400 > contact) {
                $('.contact h1').addClass('fadein').removeClass('fadeout')

            }
        });
        const arrowLeft = $('i.fa-caret-left');
        const arrowRight = $('i.fa-caret-right');
        const exitBtn = $('i.fa-times');
        let currentImage;
        let imageToClick = $('.gallery').find('div');
        let gallerySliderImage = $('.gallery-slider').find('img');
        imageToClick.on('click', function () {
            currentImage = $(this).data('value');
            $('.gallery-slider').fadeIn(300);
            gallerySliderImage.eq(currentImage).fadeIn(300);
        });
        arrowRight.on('click', function () {
            if (currentImage === 7) {
                currentImage = -1;
            }
            currentImage++;
            gallerySliderImage.eq(currentImage).fadeIn(400).siblings('img').fadeOut(400);
        });
        arrowLeft.on('click', function () {
            if (currentImage === 0) {
                currentImage = gallerySliderImage.length;
            }
            currentImage--;
            gallerySliderImage.eq(currentImage).fadeIn(400).siblings('img').fadeOut(400)
        });
        exitBtn.on('click', function () {
            $('.gallery-slider').fadeOut(300);
            gallerySliderImage.fadeOut(300);
        })
    });
