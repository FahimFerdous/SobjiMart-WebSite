(function($) {
    "use strict";

    /*----------------------------
    START - Method for assign the_farm_house controls
    ------------------------------ */
    function the_farm_house() {
        var windws = $(window),
            windwH = windws.height(),
            menus = $('.navbar-collapse'),
            menuH = menus.height(),
            welcoemTexts = $('.welcome-text-content'),
            welcoemTextH = welcoemTexts.height(),
            bannerH = (windwH - menuH),
            socialIs = $('.farm-social-icon'),
            socialI = (socialIs.height() / 2),
            verticalText = ((bannerH - welcoemTextH) / 2);
        $('.farm-welcome-text').css('height', windwH);
        socialIs.css('margin-top', - socialI);
        welcoemTexts.css({
            paddingTop: verticalText + 'px',
            paddingBottom: verticalText + 'px'
        });
    }
    // ScrollTop activation 
    $(window).on('scroll', function() {

        if ($(this).scrollTop() > 1) {
            $('.farm-navbar-area').addClass("sticky");
        } else {
            $('.farm-navbar-area').removeClass("sticky");
        }
    });
    // call the_farm_house method & init preloader when window load
    $(window).on('load', function() {
        the_farm_house();
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });

    });
	
	/*----------------------------
	START - menubar
	------------------------------ */
    $('.nav li a').on('click', function () {
		$(".collapse").removeClass("show");
    });

    // OnePageNav control
    $('.menu').onePageNav({
        currentClass: 'current-menu-item',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {
            //I get fired when the animation is starting
        },
        end: function() {
            //I get fired when the animation is ending
        },
        scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });
	
	/*----------------------------
	START - product slider
	------------------------------ */
    $('.farm-product-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
    });

	/*----------------------------
	 * START - home-slider, blocquate slider,
     * Only-Text-slider-with-fixed-background-image file slider effect
    ------------------------------ */
    $('.farm-home-slider, .blocquate-slick, .bg-fixed-farm-home-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        arrows: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev fa fa-angle-left"></button>',
        nextArrow: '<button type="button" class="slick-next fa fa-angle-right"></button>',
        fade: true
    });
	
	/*----------------------------
	START - product slider
	------------------------------ */
    $('.sponsor-slider-active').slick({
        dots: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: false,
                slidesToShow: 4
            }
        }, {
            breakpoint: 1100,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        }, {
            breakpoint: 780,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        }, {
            breakpoint: 500,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }]
    });
	
	/*----------------------------
	START - jQuery window load function
	------------------------------ */
    $(window).on('load', function() {
        the_farm_house();
    });
	
	/*----------------------------
	START - jQuery window resize function
	------------------------------ */
    $(window).on('resize', function() {
        the_farm_house();

    });
	
	/*----------------------------
	START - isotop active
	------------------------------ */
    if ($.fn.isotope) {
        $(".farm-project-active").isotope({
            filter: '*',
        });

        $('.farm-project-nav ul li').on('click', function() {

            $(".farm-project-nav ul li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".farm-project-active").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });
    }
	
	/*----------------------------
    START - Parallax scroll
    ------------------------------ */
	$('.farm-welcome-text').parallax({
		imageSrc: 'img/welcome-bg.jpg'
	});
	$('.farm-welcome-text').css({
		'backgroundAttachment':'fixed'
	});
	
	/*----------------------------
	START - Scroll to Top
	------------------------------ */
    $(window).on('scroll', function() {
		if ($(this).scrollTop() > 400) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
    $(document).on('click', '.scrollToTop', function() { // When arrow is clicked
		$('html, body').animate({scrollTop : 0},200);
		return false;
	});
	
	/*----------------------------
	START - WOW JS animation
	------------------------------ */
	new WOW().init();

    /*----------------------------
    START - jQuery Tubular activation
    ------------------------------ */
    if ($.fn.YTPlayer) {
        if (!device.tablet() && !device.mobile()) {
            $('#home').addClass(
                'big-background-default-image');
            $(".tubular").YTPlayer();
        } else {
            //jQuery will add the default background to the preferred class 
            $('#home').addClass(
                'big-background-default-image');
        }
    }


    /* =================================
    ===  CONTACT FORM          ====
    =================================== */
    $("#contact-form").on('submit', function(e) {
        e.preventDefault();
        var name = $("#name").val() + " (" + $("#phone_number").val() + ")";
        var email = $("#email_address").val();
        var subject = $("#contact_reason").val();
        var message = $("#message").val();
        var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };

        if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
            $.ajax({
                type: "POST",
                url: "php/sendmail.php",
                data: dataString,
                success: function() {
                    $('.success').fadeIn(1000);
                    $('.error').fadeOut(500);
                    $("#contact-form")[0].reset();
                }
            });
        } else {
            $('.error').fadeIn(1000);
            $('.success').fadeOut(500);
        }

        return false;
    });

})(jQuery);
