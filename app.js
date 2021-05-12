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
