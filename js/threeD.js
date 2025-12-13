

// THREE.js 3D planet
// https://www.youtube.com/watch?v=lGokKxJ8D2c&t=98s
import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
// to allow camera movement
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
// to allow the import of the gLTF
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';



document.getElementById("threeD-thumbnail").addEventListener("click", () => {
    document.getElementById("threeD-thumbnail").style.display = "none";
    document.getElementById("threeD-map").style.height = "80vh";
    document.getElementById("threeD-map").style.maxHeight = "800px";

    // Initialization
    const scene = new THREE.Scene();
    const container = document.getElementById("threeD-map");
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 1, 50); //follows W and H of CSS window, sets near(1) and far(50) point of camera
    camera.position.set(1, 1, 18); // so we don't default to the origin



    let object, controls;

    const loader = new GLTFLoader();
    // Model Initialization
    loader.load('models/planet/mikimoh.glb',
        function (gltf) {
            object = gltf.scene;
            scene.add(object)

            object.position.set(1, 1, 1); // right, up, forward
            object.scale.set(0.75, 0.75, 0.75); // Adjust scaling if the model is too large/small
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

    // Renderer ("inner window") size
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // the level of detail

    document.getElementById("threeD-map").appendChild(renderer.domElement);



    // LIGHTING
    const topLight = new THREE.DirectionalLight(0xffffff, 1); // color and intensity
    topLight.position.set(500, 500, 500); // top left-"ish"
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    // const sideLight = new THREE.DirectionalLight(0x123456, 1.75); // A softer orange light
    // sideLight.position.set(-300, -200, -200);
    // scene.add(sideLight);



    // SCREEN RESIZE
    window.addEventListener("resize", function () {
        camera.aspect = container.clientWidth / container.clientHeight; // update camera's aspect ratio to avoid squash and stretch
        camera.updateProjectionMatrix(); // mandatory function call
        renderer.setSize(container.clientWidth, container.clientHeight)

        // Re-adds split screen
        if (this.window.innerWidth > "840") {
            window.location.reload(true);
        }
    });



    // Allow users to interact with the model
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    // Start the animation
    animate();


}, {once: true});
// End Code