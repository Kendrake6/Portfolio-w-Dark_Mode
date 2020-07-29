var burg = anime({
    targets: '#hamburger-svg path',
    translateX: function () {
        return anime.random(-30, 30);
    },
    easing: 'easeInOutSine',
    duration: 900,
    delay: function (el, i, l) {
        return i * 300;
    },
    direction: 'alternate',
    autoplay: false,
    loop: true
});

burg.play();