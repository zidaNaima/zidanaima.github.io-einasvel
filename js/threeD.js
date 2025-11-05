

// THREE.js 3D planet
// https://www.youtube.com/watch?v=lGokKxJ8D2c&t=98s
import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
// to allow camera movement
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
// to allow the import of the gLTF
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';


// NOTE: winDiv only refreshes with each page refresh
var winDiv;
if (window.innerWidth <= "840") { // medium sized screens !!
    winDiv = -0.0006*window.innerWidth + 1.7;
} else {
    winDiv = 2;
}


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, (window.innerWidth / winDiv) / (window.innerHeight / 1.25), 1, 50); //follows W and H of CSS window, sets near(1) and far(1000) point of camera
camera.position.set(1, 1, 18); // so we don't default to the origin


let object, controls;

const loader = new GLTFLoader();
// LOAD IN MODEL
loader.load('models/planet/mikimoh.glb',
    function (gltf) {
        object = gltf.scene;
        scene.add(object)

        object.position.set(1, 1, 1); // right, up, forward
        object.scale.set(0.75, 0.75, 0.75); // Adjust scaling if the model is too large/small
        // 0.01 for all on Venus
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false; // drag

    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded'); // loading in progress
    },
    function (error) {
        console.error(error);
    }
);

// PLANET SIZE 
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize((window.innerWidth / winDiv), (window.innerHeight / 1.25));
renderer.setPixelRatio(window.devicePixelRatio);

document.getElementById("threeD-map").appendChild(renderer.domElement);

// LIGHTING
const topLight = new THREE.DirectionalLight(0xffffff, 1); // color and intensity
topLight.position.set(500, 500, 500); // top left-"ish"
topLight.castShadow = true;
scene.add(topLight);

const sideLight = new THREE.DirectionalLight(0x123456, 1.75); // A softer orange light
sideLight.position.set(-300, -200, -200);
// scene.add(sideLight);


const ambientLight = new THREE.AmbientLight(0xffffff, 2); // play around with the lights!
scene.add(ambientLight);



function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// SCREEN RESIZE
window.addEventListener("resize", function () {
    camera.aspect = (window.innerWidth / winDiv) / (window.innerHeight / 1.25); // window?
    camera.updateProjectionMatrix();
    renderer.setSize((window.innerWidth / winDiv), (window.innerHeight / 1.25))

    // reload once
    const setwindow = document.getElementById("settings-window");
    setwindow.style.display = "none";
    window.location.reload(true);
});

// start the animation
animate();