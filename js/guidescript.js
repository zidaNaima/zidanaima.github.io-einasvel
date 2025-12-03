

var page = window.location.pathname;

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
});

// Change color theme
function changeTheme(themeName) {
    const rootElement = document.documentElement; // Targets the <html> element
    rootElement.setAttribute('data-theme', themeName);
    selectedThemeButton(themeName);

    // Saves theme preference to localStorage
    localStorage.setItem('websiteTheme', themeName);
}

// Applies same theme when new page loads
document.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('websiteTheme') || 'default'; // Default to theme 'default'
    changeTheme(savedTheme);
});

// Updated which theme appears selected in the settings panel
function selectedThemeButton(currentTheme) {
    // remove id from previous theme
    const previousTheme = document.getElementById('selected-theme');
    if (previousTheme != null) {
        previousTheme.id = '';
    }

    // Different styling for themes with non-default-styling on background image
    if (currentTheme == 'kitty') {
        document.getElementById("theme-kitty").firstChild.id = 'selected-theme';
        document.getElementsByClassName("wrapper")[0].classList.remove("grayscale-filter");

        // background image
        document.body.style.background = 'url(images/kitty.jpg)';

        // okshlid to kitty change
        if (window.innerWidth > 840) {
            document.getElementById("current_okshlid").style.backgroundImage = "url(images/kitty_icon.png)";
            document.getElementById("current_okshlid").style.height = "150px";
        }

        // paw styling
        // no page header on the index page
        if (page != "/index.html" && page != "/zidanaima.github.io-einasvel/index.html") {
            document.getElementById("page-header").style.backgroundImage = "url(images/paw_pattern.png)";
        } else {
            // gallery header
            document.getElementById("home-gallery-header").style.backgroundImage = "url(images/paw_pattern.png)";
        }
        // dropdown
        document.getElementById("dropdown").style.backgroundImage = "url(images/paw_pattern.png)";
        // footer
        document.querySelector("footer").style.backgroundImage = "url(images/paw_pattern.png)";


    } else {
        // remove grayscale-filter if last theme was colorless
        document.getElementsByClassName("wrapper")[0].classList.remove("grayscale-filter");
        // remove kitty icon, height modification, and paws if last theme was kitty
        document.getElementById("current_okshlid").style.backgroundImage = "url(images/okshlid_icon.png)";
        document.getElementById("current_okshlid").style.height = "109.5px";
        if (page != "/index.html" && page != "/zidanaima.github.io-einasvel/index.html") {
            document.getElementById("page-header").style.backgroundImage = "none";
        } else {
            document.getElementById("home-gallery-header").style.backgroundImage = "none";
        }
        document.getElementById("dropdown").style.backgroundImage = "none";
        document.querySelector("footer").style.backgroundImage = "none";


        switch (currentTheme) {
            case 'default': document.getElementById("theme-default").firstChild.id = 'selected-theme'; break;
            case 'cream': document.getElementById("theme-cream").firstChild.id = 'selected-theme'; break;
            case 'plain': document.getElementById("theme-plain").firstChild.id = 'selected-theme'; break;
            case 'colorless':
                document.getElementById("theme-colorless").firstChild.id = 'selected-theme';
                document.getElementsByClassName("wrapper")[0].classList.add("grayscale-filter");
                break;
            case 'party': document.getElementById("theme-party").firstChild.id = 'selected-theme'; break;
            default: break;
        }
        document.body.style.background = 'linear-gradient(var(--paleYellow), rgb(255, 255, 255))';
    }
}





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
