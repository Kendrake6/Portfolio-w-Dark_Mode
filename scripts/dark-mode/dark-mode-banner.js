var dark_col = "#27292a";
var light_col = "#eaeaeb";


var back_dark = anime({
    targets: ['#container-main', '#container-about', '.opposite'],
    backgroundColor: dark_col,
    easing: 'easeInOutSine',
    duration: 500,
    autoplay: false
});

var letters_dark = anime({
    targets: ['.letter', '#hamburger-svg path'],
    color: dark_col,
    easing: 'easeInOutSine',
    duration: 500,
    delay: function (el, i, l) {
        return i * 40
    },
    autoplay: false,
    loop: false
});
var back_light = anime({
    targets: ['#container-main', '#container-about', '.opposite'],
    backgroundColor: light_col,
    easing: 'easeInOutSine',
    duration: 500,
    autoplay: false
});

var letters_light = anime({
    targets: ['.letter', '#hamburger-svg path'],
    color: light_col,
    easing: 'easeInOutSine',
    duration: 500,
    delay: function (el, i, l) {
        return i * 40
    },
    autoplay: false,
    loop: false
});