import '../plugins/bootstrap/js/bootstrap.min.js';
import '../plugins/jquery/jquery.easing.min.js';

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

// Offset for Main Navigation
$('#navFixed').affix({
    offset: {
        top: ($('.navbar-header').height() * 2)
    }
})


// handle invites
// https://talomini.de/#invite_token=xxxxxxxxxxxxxxxxxxxxxx
if (location.hash.startsWith('#invite_token=')) {
     document.head.appendChild(Object.assign(document.createElement('script'), {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        obeload: () => {
            window.netlifyIdentity?.on("init", user => {
                if (!user) {
                    window.netlifyIdentity.on("login", () => {
                        document.location.href = "/cms/";
                    });
                }
            });
        },
    }));
}
