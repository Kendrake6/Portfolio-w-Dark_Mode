dark = document.getElementsByClassName('dark');
light = document.getElementsByClassName('light');
chkbx = document.getElementById('dark-toggle');
darkArea = document.getElementById('dark-area');
lightArea = document.getElementById('light-area');
hamburger = document.getElementById('hamburger-svg');
navbar = document.getElementById('navbar');
check = document.getElementById('tog-nav');
mainBody = document.getElementsByClassName('toggle');

function checkbox() {
    darkArea.onclick = () => {
        chkbx.checked = true;

    }
    lightArea.onclick = () => {
        chkbx.checked = false;
    }
}

function darkMode() {
    trans()
    main_circ_dark.play()
    document.documentElement.setAttribute('data-theme', 'dark')
    console.log('dark')
}

function lightMode() {
    trans()
    main_circ_light.play()
    document.documentElement.setAttribute('data-theme', 'light')
    console.log('light')
}

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

function randomValues() {
    anime({
        targets: '#hamburger-svg path',
        translateX: function () {
            return anime.random(-25, 25);
        },
        easing: 'easeInOutQuad',
        delay: function (el, i, l) {
            return i * 600
        },
        duration: 750,
        direction: 'alternate',
        autoplay: true,
        loop: true,
        complete: randomValues
    })
}

randomValues()


var main_circ_light = anime({
    targets: '#circ-tog',
    rotate: [-360],
    easing: 'easeInOutSine',
    duration: 200,
    autoplay: false
});
var main_circ_dark = anime({
    targets: '#circ-tog',
    rotate: [360],
    easing: 'easeInOutSine',
    duration: 200,
    autoplay: false
});




//// Hamburger Toggle///////////////////////////////////
function navBar_vis() {
    if (check.checked == false) {
        check.checked = true;
        hamburger.style.stroke = "#fff";

    } else {
        if (check.checked == true) {
            check.checked = false;
            hamburger.style.stroke = "#000";
        }
    }
    makeVis();
}

console.log(mainBody[0]);

function makeVis() {
    if (check.checked == false) {
        navbar.style.visibility = "hidden";
        for (var i = 0; i < mainBody.length; i++) {
            mainBody[i].style.visibility = "visible";
        }
    } else {
        navbar.style.visibility = "visible";
        for (var i = 0; i < mainBody.length; i++) {
            mainBody[i].style.visibility = "hidden";
        }
    }
}