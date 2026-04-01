// 1. Text Typing Animation (from the Syntax Studio video style)
// 1. Text Typing Animation
if (document.querySelector('.multiple-text')) {
    const typed = new Typed('.multiple-text', {
        strings: ['Full-Stack Java Developer', 'Full-Stack Web3 Developer', 'DSA Problem Solver', 'Blockchain Developer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });
}

// 2. Three.js 3D Moving Background
const canvas = document.querySelector('#bg-canvas');
const scene = new THREE.Scene();

// Set up camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;

// Set up renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Create 3D particles (Stars)
const geometry = new THREE.BufferGeometry();
const particlesCount = 3000;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    // Spread particles across a wide area
    posArray[i] = (Math.random() - 0.5) * 200;
}

geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// Material for the particles
const material = new THREE.PointsMaterial({
    size: 0.2,
    color: 0x00abf0, // Matches your theme color
    transparent: true,
    opacity: 0.8
});

// Create the particle mesh and add to scene
const particlesMesh = new THREE.Points(geometry, material);
scene.add(particlesMesh);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Slowly rotate the entire particle field
    particlesMesh.rotation.y += 0.001;
    particlesMesh.rotation.x += 0.0005;

    renderer.render(scene, camera);
}
animate();

// Handle Window Resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});