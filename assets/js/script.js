jQuery(document).ready(function () {
 

    var swiper = new Swiper(".delivery_slider", {
        slidesPerView: 6,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1440: {
                slidesPerView: 6,
            },
            1024: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 4,
            },
            576: {
                slidesPerView: 3,
            },
            425: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
        },
      });


new WOW().init();

var header = $(".nav-area")
$(window).on('scroll', function(){
    var scrolling = $(this).scrollTop();
    if(scrolling < 100){
        header.fadeIn(500);	
    }
    else {
        header.fadeOut(500);
    }	
    });


// smooth scrool
var html_body = $('html, body');
$('a.nav-link.contact').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 100);
            return false;
        }
    }
});	


$(".header-item-right span").click(function(){
    $(".header-item-right").toggleClass("toggleclass");
    $(".header-bottom").toggleClass("open");
});

  $('.header-menu ul li a').on('click', function(e) {
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('li').removeClass('open');
          element.find('ul').slideUp("swing");
      }
      else {
          element.addClass('open');
          element.children('ul').slideDown("swing");
          element.siblings('li').children('ul').slideUp("swing");
          element.siblings('li').removeClass('open');
          element.siblings('li').find('li').removeClass('open');
          element.siblings('li').find('ul').slideUp("swing");
      }
  });
  
});