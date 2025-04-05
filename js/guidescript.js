

// Okshlihd Icon
var page = window.location.pathname;
var dropdown = document.getElementsByClassName("dropdown");
var drpdwn = dropdown[0];
var OkIcon = window.getComputedStyle(drpdwn, '::after');
switch (page) {
    case '/index.html':
    case '/zidanaima.github.io-einasvel/index.html':
        document.body.classList.add("index");
        break;

    case '/planet.html':
    case '/zidanaima.github.io-einasvel/planet.html':
        document.body.classList.add("planet");
        break;

    case '/language.html':
    case '/zidanaima.github.io-einasvel/language.html':
        document.body.classList.add("language");
        break;

    case '/people.html':
    case '/zidanaima.github.io-einasvel/people.html':
        document.body.classList.add("people");
        break;

    case '/about.html':
    case '/zidanaima.github.io-einasvel/about.html':
        document.body.classList.add("about");
        break;
}


// Footer form validation
function validateMessage() {
    if (document.forms[0].message.value == "") { // no message entered
        alert("Please write a message before hitting submit.")
        return false;
    }
    return true;
}


// 17 sounds
// NOTE, .ogg > .mp3
function alphaSound(letter) {
    var audio;
    switch (letter) {
        // file paths relative to the HTML file, not the JS file
        case 'D': audio = new Audio('audio/d.ogg'); break;
        case 'M': audio = new Audio('audio/m.ogg'); break;
        case 'N': audio = new Audio('audio/n.ogg'); break;
        case 'P': audio = new Audio('audio/p.ogg'); break;
        case 'A': audio = new Audio('audio/au.ogg'); break;
        case 'W': audio = new Audio('audio/ooh.ogg'); break;
        case 'O': audio = new Audio('audio/oh.ogg'); break;
        case 'E': audio = new Audio('audio/e.ogg'); break;
        case 'I': audio = new Audio('audio/ih.ogg'); break;
        case 'Y': audio = new Audio('audio/eih.ogg'); break;
        case 'H': audio = new Audio('audio/hl.ogg'); break;
        case 'G': audio = new Audio('audio/ng.ogg'); break;
        case 'K': audio = new Audio('audio/kg.ogg'); break;
        case 'Q': audio = new Audio('audio/q.ogg'); break;
        case 'S': audio = new Audio('audio/s.ogg'); break;
        case 'T': audio = new Audio('audio/th.ogg'); break;
        case 'U': audio = new Audio('audio/uh.ogg'); break;
    }
    audio.play();
}

// function pronounce(word) {
//     var audio;
//     switch (word) {
//         case '': audio = new Audio('audio/'); break;
//     }
//     audio.play();
// }


// Tutorial:
// https://www.youtube.com/watch?v=9HcxHDS2w1s
const buttons = document.querySelectorAll("[data-carousel-button]");
// data attribute is nice so you don't have to worry about class overlap
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton == "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1; // loops from front to back
        if (newIndex >= slides.children.length) newIndex = 0; // loops from back to front

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});


// expand and collapse one section
// https://www.w3schools.com/howto/howto_js_collapsible.asp
var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display == "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// expand and collapse all sections
var expall = document.getElementById("expand-all");
expall.addEventListener("click", function () {
    this.classList.toggle("active"); // makes expand-all active
    var colla = document.getElementsByClassName("collapse");
    for (i = 0; i < colla.length; i++) {
        var content = colla[i].nextElementSibling;
        if (expall.classList.contains("active")) { // expand
            colla[i].classList.add("active"); // sets active status for all
            content.style.display = "block";
        } else {
            colla[i].classList.remove("active"); // collapse
            content.style.display = "none";
        }
    }
});


// expand and collapse one INSIDE section
var collI = document.getElementsByClassName("collapse-inside");
for (i = 0; i < collI.length; i++) {
    collI[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display == "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
