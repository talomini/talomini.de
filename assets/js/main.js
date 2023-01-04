import '../plugins/bootstrap/js/bootstrap.min.js';

import $ from '../plugins/jquery/jquery.js';

const query = document.querySelector.bind(document)
const queryAll = document.querySelectorAll.bind(document)
const on = (el, event, fn) => el.addEventListener(event, fn)

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: ($('.navbar-header').height() + 1)
})

// Closes the Responsive Menu on Menu Item Click
queryAll('.navbar-collapse ul li a').forEach((a) => {
    on(a, 'click', () => {
        query('.navbar-toggle:not(.collapsed)')?.click()
    })
})

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
