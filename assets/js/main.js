


(function ($) {
    // ("use strict");

    $(document).ready(function ($) {
        // $('.about-counter').counterUp({
        //     delay: 10,
        //     time: 1500,
        // });

        // owl slider

        $('.client-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
        });

        var typed = new Typed('#element', {
            strings: ['I Am A Developer', 'I Am A Designer', 'I Am A Markater'],
            stringsElement: null,
            typeSpeed: 150,
            startDelay: 1000,
            backSpeed: 50,
            backDelay: 1500,
            loop: true,
            loopCount: Infinity,
            showCursor: true,
            cursorChar: "|",
            attr: null,
            contentType: 'html',

        });


    });

    // lightbox
    lightbox.option({
        'resizeDuration': 100,
        'wrapAround': true,
        // 'albumLabel': "Image %1 of %2"
        'fitImagesInViewport': true,
        'imageFadeDuration':100,
    })

})(jQuery);



