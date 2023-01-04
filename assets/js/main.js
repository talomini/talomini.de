import '../plugins/bootstrap/js/bootstrap.min.js';

const query = document.querySelector.bind(document)
const queryAll = document.querySelectorAll.bind(document)
const on = (el, event, fn) => el.addEventListener(event, fn)

// Set resize title based on scroll position
const nav = query('.navbar-fixed-top')
const off = query('.navbar-header').offsetHeight
const checkAffix = () => {
    const top = window.scrollY <= off

    nav.classList.toggle('affix-top', top)
    nav.classList.toggle('affix', !top)
}

on(window, 'scroll', checkAffix)
checkAffix()

on(window, 'load', () => {
    nav.classList.add('with-transitions')
})

// Closes the Responsive Menu on Menu Item Click
queryAll('#navbar-content ul li a').forEach((a) => {
    on(a, 'click', () => {
        query('#navbar-content').classList.remove('show')
    })
})

on(query('#navbar-toggle'), 'click', () => {
    query('#navbar-content').classList.toggle('show')
})

// handle invites
// https://talomini.de/#invite_token=xxxxxxxxxxxxxxxxxxxxxx
if (location.hash.startsWith('#invite_token=')) {
     document.head.appendChild(Object.assign(document.createElement('script'), {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        onload: () => {
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
