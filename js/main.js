(function ($) {
  "use strict";

  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  // Smooth scroll
  $('.nav-menu a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;
        if ($('#header').length) {
          top_space = $('#header').outerHeight();
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }
        return false;
      }
    }
  });

  // Custom Player Logic
  var player = document.getElementById('radio-player');
  var playBtn = document.getElementById('play-pause');

  if (playBtn && player) {
    playBtn.addEventListener('click', function () {
      var icon = playBtn.querySelector('i');
      if (player.paused) {
        player.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        playBtn.classList.add('playing');
      } else {
        player.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
        playBtn.classList.remove('playing');
      }
    });
  }

  // Mobile Navigation (Simplified)
  $('#mobile-nav-toggle').on('click', function() {
    $('.nav-menu').toggleClass('mobile-nav-active');
    $(this).find('i').toggleClass('fa-bars fa-times');
  });

})(jQuery);
