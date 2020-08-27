// =====Custom Function Start Here=====

$(function () {

  //  =====Banner Jquery Code Start Here=====
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 300,
  });
  //  =====Banner Jquery Code End Here=====

  //  =====Project Jquery Code Start Here=====
  var containerEl = document.querySelector('.project-mixit');
  var mixer = mixitup(containerEl);
  //  =====Project Jquery Code End Here=====

  //  =====Video Jquery Code Start Here=====
  $('.venobox').venobox();
  //  =====Video Jquery Code End Here=====

  //  =====Project Counter Jquery Code Start Here=====
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  //  =====Project Counter Jquery Code End Here=====

  //  =====Post Jquery Code Start Here=====
  $('.post-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 300,
    centerMode: true,
    centerPadding: false,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  //  =====Post Jquery Code End Here=====

  //  =====Client Jquery Code Start Here=====
  $('.client-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 300,
    centerMode: true,
    centerPadding: false,

    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  //  =====Client Jquery Code End Here=====

  //  =====Common Jquery Code Start Here=====

  //  =====Common Jquery Code End Here=====

});
// =====Custom Function End Here=====