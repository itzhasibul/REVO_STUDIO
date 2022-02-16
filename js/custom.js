$(function () {

    // =========== MixIT Up PART START ===========

    var containerEl = document.querySelector('.folio_part');

    var mixer = mixitup(containerEl);

    // =========== MixIT Up PART END =========== 


    //==== Slick-Slider Banner JS =========== 

    $('.banner_slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });

    // =========== Slick-Slider Banner JS PART END =========== 


    // ==== Slick-Slider SERVICE JS =========== 

    $('.team_slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });

    // =========== Slick-Slider SERVICE JS PART END ===========


    // ==== Slick-Slider SPONSOR JS =========== 

    $('.partner_slick').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });

    // =========== Slick-Slider SPONSOR JS PART END =========== 


    // ==== Slick-Slider Post JS =========== 

    $('.blog_slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });

    // =========== Slick-Slider Post JS PART END ===========


    // ==== Slick-Slider GALLERY JS =========== 

    $('.gallery_slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });

    // =========== Slick-Slider GALLERY JS PART END ===========

    //==== VenoBox Video JS =========== 

    new VenoBox({
        selector: '.my-video-links',
    });

    // =========== VenoBox Video JS PART END =========== 


    //==== Counter-Up JS =========== 

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // =========== Counter-Up JS PART END =========== 



    //==== Back-to-top button =========== 

    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    // =========== Back-to-top button PART END =========== 


    //==== Animate the scroll to top =========== 

    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 3000);
    });

    // =========== Animate the scroll to top PART END =========== 


});












// ===========  PART START ===========

// ===========  PART END =========== 