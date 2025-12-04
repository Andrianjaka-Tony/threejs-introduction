import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.getElementById("webgl");

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Scene
const scene = new THREE.Scene();

// Axes
const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xf1f1f1, wireframe: true })
);
mesh.position.set(0, 0, 0);
scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0.5, 0.5, 3);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

// gsap.to(mesh.position, { duration: 2.7, delay: 1, x: 5, ease: "power3.out" });

const clock = new THREE.Clock();
function animate() {
  const elapsedTime = clock.getElapsedTime();

  // animation;
  // mesh.position.x += 0.001;
  // mesh.rotation.y = (elapsedTime * Math.PI) / 2;
  // mesh.position.x = Math.sin(elapsedTime) * 1.5;
  camera.position.x = Math.cos(elapsedTime) * Math.PI * 2;
  camera.position.z = Math.sin(elapsedTime) * Math.PI * 2;
  camera.lookAt(mesh.position);

  // rendering;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
