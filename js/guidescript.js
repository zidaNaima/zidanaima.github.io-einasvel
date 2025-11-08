

// Okshlihd Icon
var page = window.location.pathname;
var dropdown = document.getElementsByClassName("dropdown");
var drpdwn = dropdown[0];


// Settings pop-up
const gear = document.getElementById("settings");
gear.addEventListener("click", () => {
    const setwindow = document.getElementById("settings-window");
    setwindow.style.display = "block";
});

// Settings close
const settx = document.getElementById("settings-exit");
settx.addEventListener("click", () => {
    const setwindow = document.getElementById("settings-window");
    setwindow.style.display = "none";
    window.location.reload(true);
});

// Settings themes
const themedefault = document.getElementById("theme-default");
themedefault.addEventListener("click", () => {
    const root = document.documentElement;
    localStorage.setItem("theme", "default");
    root.style.setProperty('--brightYellow', 'rgb(243, 219, 92)');
    root.style.setProperty('--paleYellow', 'rgb(251, 247, 217)');
    root.style.setProperty('--wrapperBlue', 'rgb(191, 223, 223)');
    root.style.setProperty('--darkBlue', 'rgb(20, 60, 100)');
    root.style.setProperty('--offWhite', 'rgb(249, 247, 234)');
    root.style.setProperty('--wrapperRed', 'rgb(234, 188, 134)');
    root.style.setProperty('--redBrown', 'rgb(146, 75, 20)');
    root.style.setProperty('--darkRedBrown', 'rgb(70, 29, 6)');

    root.style.setProperty('--borderBlue', 'rgb(124, 157, 170)');
    root.style.setProperty('--darkBlueT', '20, 60, 100');
    root.style.setProperty('--headerBlueT', '158, 191, 199');
});
const themecontrast = document.getElementById("theme-contrast");
themecontrast.addEventListener("click", () => {
    const root = document.documentElement;
    localStorage.setItem("theme", "contrast");
    root.style.setProperty('--brightYellow', 'rgb(247, 227, 132)');
    root.style.setProperty('--paleYellow', 'rgb(249, 247, 234)');
    root.style.setProperty('--wrapperBlue', 'rgb(214, 244, 252)');
    root.style.setProperty('--darkBlue', 'rgb(9, 39, 65)');
    root.style.setProperty('--offWhite', 'rgb(255, 255, 255)');
    root.style.setProperty('--wrapperRed', 'rgb(234, 188, 134)');
    root.style.setProperty('--redBrown', 'rgb(146, 75, 20)');
    root.style.setProperty('--darkRedBrown', 'rgb(70, 29, 6)');

    root.style.setProperty('--borderBlue', 'rgb(124, 157, 170)');
    root.style.setProperty('--darkBlueT', '9, 39, 65');
    root.style.setProperty('--headerBlueT', '191, 223, 223');
});
const themesunset = document.getElementById("theme-sunset");
themesunset.addEventListener("click", () => {
    const root = document.documentElement;
    localStorage.setItem("theme", "sunset");
    root.style.setProperty('--brightYellow', 'rgb(251, 247, 217)');
    root.style.setProperty('--paleYellow', 'rgb(251, 247, 217)');
    root.style.setProperty('--wrapperBlue', 'rgb(240, 234, 183)');
    root.style.setProperty('--darkBlue', 'rgb(107, 59, 14)');
    root.style.setProperty('--offWhite', 'rgb(249, 247, 234)');
    root.style.setProperty('--wrapperRed', 'rgb(209, 157, 214)');
    root.style.setProperty('--redBrown', 'rgb(41, 23, 88)');
    root.style.setProperty('--darkRedBrown', 'rgb(41, 23, 88)');

    root.style.setProperty('--borderBlue', 'rgb(107, 51, 14)');
    root.style.setProperty('--darkBlueT', '107, 51, 14');
    root.style.setProperty('--headerBlueT', '195, 160, 90');
});
const themeplain = document.getElementById("theme-plain");
themeplain.addEventListener("click", () => {
    const root = document.documentElement;
    localStorage.setItem("theme", "plain");
    root.style.setProperty('--brightYellow', 'rgb(235, 213, 93)');
    root.style.setProperty('--paleYellow', 'rgb(255, 255, 255)');
    root.style.setProperty('--wrapperBlue', 'rgb(236, 236, 236)');
    root.style.setProperty('--darkBlue', 'rgb(44, 44, 44)');
    root.style.setProperty('--offWhite', 'rgb(241, 240, 226)');
    root.style.setProperty('--wrapperRed', 'rgb(234, 234, 234)');
    root.style.setProperty('--redBrown', 'rgb(44, 44, 44)');
    root.style.setProperty('--darkRedBrown', 'rgb(44, 44, 44)');

    root.style.setProperty('--borderBlue', 'rgb(44, 44, 44)');
    root.style.setProperty('--darkBlueT', '44, 44, 44');
    root.style.setProperty('--headerBlueT', '210, 210, 200');
});
const themecolorless = document.getElementById("theme-colorless");
themecolorless.addEventListener("click", () => {
    const root = document.documentElement;
    localStorage.setItem("theme", "colorless");
    root.style.setProperty('--brightYellow', 'rgb(243, 243, 243)');
    root.style.setProperty('--paleYellow', 'rgb(251, 251, 251)');
    root.style.setProperty('--wrapperBlue', 'rgb(191, 191, 191)');
    root.style.setProperty('--darkBlue', 'rgb(36, 36, 36)');
    root.style.setProperty('--offWhite', 'rgb(249, 249, 249)');
    root.style.setProperty('--wrapperRed', 'rgb(234, 234, 234)');
    root.style.setProperty('--redBrown', 'rgb(146, 146, 146)');
    root.style.setProperty('--darkRedBrown', 'rgb(70, 70, 70)');

    root.style.setProperty('--borderBlue', 'rgb(107, 107, 107)');
    root.style.setProperty('--darkBlueT', '107, 107, 107');
    root.style.setProperty('--headerBlueT', '170, 170, 170');

    // document.querySelectorAll("img").style.setProperty('filter: grayscale(100%) !important;');
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.classList.add('grayscale-filter');
    });
});

// keep theme preferences between page switches
// only initiates on page load
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") != null) {
        switch (localStorage.getItem("theme")) {
            case "default": themedefault.dispatchEvent(new Event('click')); break;
            case "contrast": themecontrast.dispatchEvent(new Event('click')); break;
            case "sunset": themesunset.dispatchEvent(new Event('click')); break;
            case "plain": themeplain.dispatchEvent(new Event('click')); break;
            case "colorless": themecolorless.dispatchEvent(new Event('click')); break;
        }

        document.body.style.backgroundImage = 'linear-gradient(var(--paleYellow), #FFF)';
    }
});





// Footer form submission
// https://www.youtube.com/watch?v=qxWDVRyc95E
const form = document.forms[0];
const messageInput = form.message;
const contactInput = form.contact;

const publicKey = "xfbPdiVD70qK8vTY3";
const serviceId = "service_g63duhk";
const templateId = "template_gmt1yl4";

// Form validation
function validateMessage() {
    if (messageInput.value == "") { // no message entered
        alert("Please write a message before hitting submit.")
        return false;
    }
    return true;
}

// Form submission
form.addEventListener("submit", (e) => {
    emailjs.init(publicKey);

    e.preventDefault(); // prevent form default behavior. Needed for outside submission.
    const inputFields = {
        message: messageInput.value,
        contact: contactInput.value,
    };

    if (validateMessage()) {
        emailjs.send(serviceId, templateId, inputFields)
            .then(() => {
                alert("Message sent successfully. Thank you!");
                messageInput.value = "";
                contactInput.value = "";
            }, (error) => {
                alert("Sorry, something seems to have gone wrong.");
                console.log(error); // sure.
            });
    }

});



// --------------------------------- HOME

if (page == "/index.html" || page == "/zidanaima.github.io-einasvel/index.html") {

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

}



// --------------------------------- LANGUAGE

// To Fix: language functions also on people page. fix formatting!
if (page == "/language.html" || page == "/zidanaima.github.io-einasvel/language.html") {

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

}



// --------------------------------- PLANET

if (page == "/planet.html" || page == "/zidanaima.github.io-einasvel/planet.html") {

    // Large-map Data
    var mapBttn = document.getElementById("map-data-button");
    mapBttn.addEventListener("click", () => {
        const map = document.getElementById("large-map");

        if (map.style.backgroundImage.includes("map_named.png") || map.style.backgroundImage == "") { // background img starts unset
            // fix: changed ../images to images 9/24/25
            // src is relative to the html file
            map.style.backgroundImage = "url('images/map_named_not-named.png')";
            map.firstChild.href = "images/map_named_not-named.png";

        } else {
            map.style.backgroundImage = "url('images/map_named.png')";
            map.firstChild.href = "images/map_named_not-named.png";
        }
    });


    // Notebook Tabs
    var tab = document.getElementsByClassName("planet-notebook-tab");
    var tb;

    // Star tab starts open
    var startab = document.getElementById("star-tab");
    startab.classList.toggle("active-notebook-tab");
    startab.previousElementSibling.firstElementChild.style.display = "block";
    startab.nextElementSibling.style.display = "block";

    for (tb = 0; tb < tab.length; tb++) {
        tab[tb].addEventListener("click", function () {
            var notetopic = this.previousElementSibling.firstElementChild; // planet-notebook-header h1
            var notes = this.nextElementSibling; // section

            if (notes.style.display == "block") {
                notetopic.style.display = "none";
                notes.style.display = "none";
                this.classList.toggle("active-notebook-tab");
            } else {

                const notnotes = Array.from(tab).filter(tab => tab !== this);
                notnotes.forEach(notnotes => {
                    var nottopic = notnotes.previousElementSibling.firstElementChild; // header
                    var nots = notnotes.nextElementSibling; // section

                    notnotes.classList.remove("active-notebook-tab");
                    nottopic.style.display = "none";
                    nots.style.display = "none";
                });

                notetopic.style.display = "block";
                notes.style.display = "block";
                this.classList.toggle("active-notebook-tab");
            }
        });
    }

}



// --------------------------------- PEOPLE

// TO FIX: expand sections not only used in people page. fix!!
if (page == "/people.html" || page == "/zidanaima.github.io-einasvel/people.html" || page == "/language.html" || page == "/zidanaima.github.io-einasvel/language.html") {

    // expand and collapse one section
    // https://www.w3schools.com/howto/howto_js_collapsible.asp
    var coll = document.getElementsByClassName("collapse");

    for (let i = 0; i < coll.length; i++) {
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
        for (let i = 0; i < colla.length; i++) {
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
    for (let i = 0; i < collI.length; i++) {
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

}
