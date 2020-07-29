//For the purpose of implementing a dark mode.
btn = document.getElementById('nav-button');
navbar = document.getElementById('navbar');
check = document.getElementById('tog-nav');
mainBody = document.getElementsByClassName('toggle');
hamburger = document.getElementById('hamburger-svg');
letters = document.getElementsByClassName('letter');
opps = document.getElementsByClassName('opposite');
darkCheck = document.getElementById('dark-toggle');
lightCheck = document.getElementById('light-toggle');
darkToggle = document.getElementsByClassName('darkToggle');
darkArea = document.getElementById('dark-area');
lightArea = document.getElementById('light-area');
mainContainer = document.getElementById('container-main');






///dark mode//////

var main_circ_light = anime({
    targets: '#circ-tog',
    rotate: [-360],
    easing: 'easeInOutSine',
    duration: 700,
    autoplay: false
});
var main_circ_dark = anime({
    targets: '#circ-tog',
    rotate: [360],
    easing: 'easeInOutSine',
    duration: 700,
    autoplay: false
});

function checkDark() {
    darkCheck.checked = true;
    lightCheck.checked = false;
    main_circ_dark.play();
    letters_light.play();
    back_dark.play();
    projects_light_mode();
    darkMode();
}

function checkLight() {
    darkCheck.checked = false;
    lightCheck.checked = true;
    letters_dark.play();
    back_light.play();
    projects_dark_mode();
    main_circ_light.play();
    darkMode();
}

function darkMode() {
    // dark mode off
    if (darkCheck.checked == false && lightCheck.checked == true) {
        setTimeout(() => {
            for (var i = 0; i < letters.length; i++) {
                console.log(letters[i]);
                letters[i].style.color = "#27292a";
            }
            for (var i = 0; i < opps.length; i++) {
                opps[i].style.backgroundColor = "#eaeaeb";
            }
            for (var i = 0; i < darkToggle.length; i++) {
                darkToggle[i].style.backgroundColor = "#27292a";
            }
            hamburger.style.stroke = "#27292a";
        }, 2000);
    } else {
        setTimeout(() => {
            if (darkCheck.checked == true && lightCheck.checked == false) {
                for (var i = 0; i < letters.length; i++) {
                    letters[i].style.color = "#eaeaeb";
                }
                for (var i = 0; i < opps.length; i++) {
                    opps[i].style.backgroundColor = "#27292a";
                }
                for (var i = 0; i < darkToggle.length; i++) {
                    darkToggle[i].style.backgroundColor = "#eaeaeb";
                }
                hamburger.style.stroke = "#eaeaeb";
            }
        }, 2000);
    }
}




















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