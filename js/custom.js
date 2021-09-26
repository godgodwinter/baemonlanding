
  $(function () {

    // MENU
    $('.nav-link').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });


    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });


    // SMOOTH SCROLL
    $(function() {
      $('.nav-link').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
          }, 1000);
            event.preventDefault();
      });
    });  


    // PROJECT SLIDE
    $('#project-slide').owlCarousel({
      stagePadding: 100,
      loop: true,
      center: true,
      autoplayHoverPause: false,
      autoplay: false,
      margin: 30,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          768:{
              items:2,
          }
      }
    });

    //SCROLL BAR
    $("#top").niceScroll({
      scrollspeed: 0,
      cursorcolor: "#f1c111",
      cursorwidth: "7px",
      background: "rgba(20,20,20,0)",
      cursorborder: "1px solid #f1c111",
      cursorborderradius: "5px",
      zindex: "999"
 });

  });


    

