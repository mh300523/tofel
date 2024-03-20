$(document).ready(function () {
 
    
    $(window).on('load', function () {
        $('.pre-loader').fadeOut("500", function () {
            $(this).remove();
            $("body").removeClass("overflow");
        });
    });
  
    ///////// **mobile size** /////////
    
    $('#navbtn').click(function(){
		$('.main_nav').addClass('over_mob');
		$('.over_click').addClass('on');
		$('body').addClass('scroll_mob');
	});

	$('.closebtn').click(function(){
		$('.main_nav').removeClass('over_mob');
		$('.over_click').removeClass('on');
		$('body').removeClass('scroll_mob');
	});
    
    $('.over_click').click(function(){
		$('.closebtn').trigger('click');
	});


    ///////// **main Slider** /////////
    var mainswiper = new Swiper('.main_slider .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 500,
    updateOnWindowResize: true,
    
        
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
    
    
    var cat1swiper = new Swiper('#category1 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 29,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '#category1 .pro_slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#category1 .swiper-button-next',
            prevEl: '#category1 .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
    

    var cat2swiper = new Swiper('#category2 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 29,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '#category2 .pro_slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#category2 .swiper-button-next',
            prevEl: '#category2 .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
    
    
   
    var cat3swiper = new Swiper('#category3 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 29,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '#category3 .pro_slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#category3 .swiper-button-next',
            prevEl: '#category3 .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
    
    /*agent slider*/
    var agentswiper = new Swiper('.agents_slider .swiper-container', {
        slidesPerView: 6,
        spaceBetween: 29,
        loop: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.agents_slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.agents_slider .swiper-button-next',
            prevEl: '.agents_slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
            },
        },
    });
    
 
  });  

