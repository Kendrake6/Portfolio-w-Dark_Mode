/// variables /////////////////////////
svg_1 = document.getElementById('svg_1');
svg_2 = document.getElementById('svg_2');
svg_3 = document.getElementById('svg_3');
svg_4 = document.getElementById('svg_4');
svg_5_main = document.getElementById('svg_5_main');
svg_5_comp = document.getElementById('svg_5_comp');
svg_6 = document.getElementById('svg_6');

////////////////////////////////////////

var a_d = 700;
var light_col = '#eaeaeb';
var dark_col = '#27292a';
var delay = 600;

var svg_1_anim_light = anime({
    targets: ['#svg_1'],
    fill: light_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});
var svg_1_anim_dark = anime({
    targets: '#svg_1',
    fill: dark_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});

var svg_2_anim_dark = anime({
    targets: '#svg_2',
    stroke: dark_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});

var svg_2_anim_light = anime({
    targets: '#svg_2',
    stroke: light_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});

var svg_3_anim_light = anime({
    targets: ['#svg_3'],
    stroke: light_col,
    fill: light_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});

var svg_3_anim_dark = anime({
    targets: '#svg_3',
    stroke: dark_col,
    fill: dark_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});

var svg_4_anim_main_light = anime({
    targets: ['#svg_4_main_rec *',
        '#svg_4_comp_mob_button'
    ],
    fill: light_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});
var svg_4_anim_mob_light = anime({
    targets: '#svg_4_comp_mob *',
    fill: light_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});

var svg_4_anim_main_dark = anime({
    targets: ['#svg_4_main_rec *',
        '#svg_4_comp_mob_button'
    ],
    fill: dark_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});

var svg_4_anim_mob_dark = anime({
    targets: '#svg_4_comp_mob *',
    fill: light_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});


var svg_5_anim_dark = anime({
    targets: '#svg_5 *',
    stroke: dark_col,
    fill: light_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});

var svg_5_anim_main_light = anime({
    targets: ['#svg_5_main_p1', '#svg_5_main_p2', '#svg_5_comp_rect'],
    stroke: light_col,
    fill: 'none',
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});

var svg_5_anim_comp_light = anime({
    targets: ['#svg_5_comp_scale', '#svg_5_comp_pen1 path', '#svg_5_comp_pen2'],
    stroke: light_col,
    fill: light_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});

var svg_5_anim_main_dark = anime({
    targets: ['#svg_5_main_p1', '#svg_5_main_p2', '#svg_5_comp_rect'],
    stroke: dark_col,
    fill: 'none',
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});

var svg_5_anim_comp_dark = anime({
    targets: ['#svg_5_comp_scale', '#svg_5_comp_pen1 path', '#svg_5_comp_pen2'],
    stroke: dark_col,
    fill: dark_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});


var svg_6_anim_main_light = anime({
    targets: ['#svg_6_main_rect'],
    stroke: light_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});
var svg_6_anim_comp_light = anime({
    targets: ['#svg_6_comp_pen path', '#svg_6_comp_paper *'],
    stroke: light_col,
    fill: light_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});
var svg_6_anim_main_dark = anime({
    targets: ['#svg_6_main_rect'],
    stroke: dark_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});
var svg_6_anim_comp_dark = anime({
    targets: ['#svg_6_comp_pen path', '#svg_6_comp_paper g path'],
    stroke: dark_col,
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});

var border_light = anime({
    targets: '.proj-text',
    borderTop: '2px solid white',
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});
var border_dark = anime({
    targets: '.proj-text',
    borderTop: '2px solid black',
    easing: 'easeInOutSine',
    duration: a_d,
    delay: function (el, i, l) {
        return i * delay
    },
    autoplay: false,
    loop: false
});
var darkAnims = [svg_1_anim_dark, svg_2_anim_dark, svg_3_anim_dark, svg_4_anim_main_dark, svg_4_anim_mob_dark,
    svg_5_anim_comp_dark, svg_5_anim_main_dark, svg_6_anim_comp_dark, svg_6_anim_main_dark, border_dark
];

var lightAnims = [svg_1_anim_light, svg_2_anim_light, svg_3_anim_light, svg_4_anim_main_light, svg_4_anim_mob_light,
    svg_5_anim_comp_light, svg_5_anim_main_light, svg_6_anim_comp_light, svg_6_anim_main_light, border_light
];



function projects_light_mode() {
    console.log('reached1');
    for (var i = 0; i < lightAnims.length; i++) {
        lightAnims[i].play();
    }
}

function projects_dark_mode() {
    console.log('reached2');
    for (var i = 0; i < darkAnims.length; i++) {
        darkAnims[i].play();
    }
}