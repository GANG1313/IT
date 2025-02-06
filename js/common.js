$(document).ready(function() {

    const header = $('#header');
    const topBannerHeight = $('.topBanner').outerHeight();

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > topBannerHeight) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    });

    // 탑 배너 닫기
    $('.topBanner .close-btn').on('click', function () {
        $('.topBanner').hide();
    });

    $(".dropbox1").click(function(){
		$(".drop-content").toggle();
		
	});

    //모바일 메뉴
    $(".m_open_btn button").click(function () {
    $(".nav.mobile").addClass("active");
    $(".dark").addClass("show");
    });

    $(".closeBtn, .dark").click(function () {
    $(".nav.mobile").removeClass("active");
    $(".dark").removeClass("show");
    });

    $('.nav.mobile .menu > li > a').click(function (e) {
        e.preventDefault();
    
        const $submenu = $(this).next('.m_submenu');
    
        $('.nav.mobile .menu > li').removeClass('active');
        $('.header .nav.mobile>.menu>li>a::after').removeClass('active');
    
        $(this).parent('li').addClass('active');
    
        $('.nav.mobile .m_submenu').not($submenu).slideUp();
        $submenu.slideToggle();
    });

    $('.nav.mobile .m_submenu .gnbDepth2Wrap > li > a').click(function (e) {
        e.preventDefault();
        const $depth3 = $(this).next('.gnbDepth3Wrap');
    
        $('.nav.mobile .m_submenu .gnbDepth3Wrap').not($depth3).slideUp().parent().removeClass('active');
    
        $depth3.slideToggle();
        $(this).parent().toggleClass('active');
    });

    // mainSlider
    var $mainSlider = $('.mainslider');
    var isMainPlaying = true;
    var $mainPlayPauseIcon = $('#mainPlayPauseIcon');

    $mainSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 600,
        cssEase: 'ease-in-out', 
        fade: false 
    });

    var mainTotalSlides = $mainSlider.slick('getSlick').slideCount;
    $('#main-total-slides').text(mainTotalSlides?.toString().padStart(2, '0'));
    updateMainCurrentSlide();

    $mainSlider.on('afterChange', function () {
        updateMainCurrentSlide();
    });

    $('#main-prev').on('click', function () {
        $mainSlider.slick('slickPrev');
    });

    $('#main-next').on('click', function () {
        $mainSlider.slick('slickNext');
    });

    $('#main-play-pause').on('click', function () {
        if (isMainPlaying) {
            $mainSlider.slick('slickPause'); 
            $mainPlayPauseIcon.attr('src', 'images/common/mainslider_play.png').attr('alt', '재생 버튼');
        } else {
            $mainSlider.slick('slickPlay'); 
            $mainPlayPauseIcon.attr('src', 'images/common/mainslider_pause.png').attr('alt', '정지 버튼');
        }
        isMainPlaying = !isMainPlaying;
    });

    function updateMainCurrentSlide() {
        var currentSlide = $mainSlider.slick('slickCurrentSlide') + 1;
        $('#main-current-slide').text(currentSlide.toString().padStart(2, '0'));
    }

    // sec3_실시간신청현황
    $('.sec3-applicationStatus .swiper-wrapper').slick({
        vertical: true,       
        slidesToShow: 5,      
        slidesToScroll: 1,  
        autoplay: true,      
        autoplaySpeed: 2000,  
        infinite: true,       
        arrows: false,       
        dots: false,    
    });

    //sec4_사용후기
    $(".reviews-content .slider").each(function () {
        if (!$(this).hasClass("slick-initialized")) {
            $(this).slick({
                infinite: true,
                slidesToShow: 2, 
                slidesToScroll: 1,
                arrows: true, 
                dots: false, 
                responsive: [
                    {
                        breakpoint: 1254, 
                        settings: {
                            slidesToShow: 1, 
                        },
                    },
                    {
                        breakpoint: 951, 
                        settings: {
                            slidesToShow: 2, 
                        },
                    },
                    {
                        breakpoint: 480, 
                        settings: {
                            slidesToShow: 1, 
                        },
                    },
                ],
            });
        }
    });

    //sec4_faq
    $('.faq-item .question').click(function () {
        const parent = $(this).closest('.faq-item');

        $('.faq-item').not(parent).removeClass('on').addClass('off').find('.answer').slideUp();

        parent.toggleClass('on off').find('.answer').slideToggle();
    });

    // TOP 버튼 클릭 이벤트
	$('.totop').click(function (e) {
		e.preventDefault(); 
		$('html, body').animate({ scrollTop: 0 }, 500); 
	});

    // 메인_하단고정
    const $mainBottomBar = $('#bottom-fixed-bar');
    const mainScrollTriggerHeight = 300;

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > mainScrollTriggerHeight) {
            $mainBottomBar.removeClass('hidden').addClass('visible');
        } else {
            $mainBottomBar.removeClass('visible').addClass('hidden');
        }
    });

    // 인터넷_하단고정
    const $internetBottomBar = $('#sub-bottom-fixed-bar');

    $internetBottomBar.addClass('visible').removeClass('hidden');

    $(window).on('scroll', function () {
        $internetBottomBar.addClass('visible').removeClass('hidden');
    });
    

});





