if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
    var typed = new Typed('.text-slider', {
      strings: typed_strings.split(','),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30
    });
  }

  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(200).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });


  window.addEventListener("scroll", function () {
    let header = document.querySelector("nav");
  
    header.classList.toggle("scrolling-active", window.scrollY > 0);
  });
  

  $(document).ready(
  
    function() {
  
  $(' .about-section').waypoint( function(direction) {
  
        $(' .about-section').addClass('animated fadeIn');
  
    }, {
  
        offset : '65%'
    });

  
  $(' .tc1').waypoint(function(direction){
      $(' .tc1').addClass('animated fadeInLeft')
  }, {
  
      offset : '60%'
  });
  $(' .tc2').waypoint(function(direction){
      $(' .tc2').addClass('animated fadeInRight')
  }, {
  
      offset : '60%'
  });
  $(' .tc3').waypoint(function(direction){
      $(' .tc3').addClass('animated fadeInLeft')
  }, {
  
      offset : '60%'
  });
  $(' .tc4').waypoint(function(direction){
      $(' .tc4').addClass('animated fadeInRight')
  }, {
  
      offset : '60%'
  });
  

    
  
  });