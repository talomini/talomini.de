import '../plugins/bootstrap/js/bootstrap.min.js';
import '../plugins/jquery/jquery.easing.min.js';
import '../plugins/jquery/jquery.fittext.js';

import $ from '../plugins/jquery/jquery.js';

// jQuery for page scrolling feature - requires jQuery Easing plugin
$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - $('.navbar-header').height())
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: ($('.navbar-header').height() + 1)
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Fit Text Plugin for Main Header
$("h1").fitText(
    1.2, {
        minFontSize: '35px',
        maxFontSize: '65px'
    }
);

// Offset for Main Navigation
$('#navFixed').affix({
    offset: {
        top: ($('.navbar-header').height() * 2)
    }
})

window.netlifyIdentity?.on("init", user => {
  if (!user) {
    window.netlifyIdentity.on("login", () => {
      document.location.href = "/cms/";
    });
  }
});