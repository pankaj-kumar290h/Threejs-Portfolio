import * as THREE from "three";
const loader = new THREE.TextureLoader();

import bg1 from "../images/55.jpg";

const three_bg = document.querySelector(".three-bg");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGL1Renderer({
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
three_bg.appendChild(renderer.domElement);

//////responcive////////
window.addEventListener("resize", () => {
  camera.aspect(window.innerWidth / window.innerHeight);
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth / window.innerHeight);
});

const geometry = new THREE.PlaneGeometry(18, 10, 15, 9);
const material = new THREE.MeshBasicMaterial({
  // color: 0xffff00,
  map: loader.load(bg1),
  // wireframe: true,
});
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);
camera.position.z = 5;

const count = geometry.attributes.position.count;
const clock = new THREE.Clock();

function animate() {
  const time = clock.getElapsedTime();
  for (let i = 0; i < count; i++) {
    const x = geometry.attributes.position.getX(i);
    const y = geometry.attributes.position.getY(i);

    const anim1 = 0.7 * Math.sin(x * 2 + time * 0.7);
    const anim2 = 0.25 * Math.sin(x + time * 0.7);

    geometry.attributes.position.setZ(i, anim2);
    geometry.computeVertexNormals();
    geometry.attributes.position.needsUpdate = true;
  }

  requestAnimationFrame(animate);
  // torusKnot.rotation.x += 0.01;
  // torusKnot.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();
