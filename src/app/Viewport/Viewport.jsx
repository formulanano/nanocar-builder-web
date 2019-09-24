/**
 * Viewport.jsx
 *
 * @description responsible for rendering interactive 3D nano car assemble screen
 */

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import FPSMonitor from "../commons";
import { nanocar } from "../../data";
import { addMolecule } from "../../utils";

// get OrbitControls
const OrbitControls = require("three-orbitcontrols");

/**
 * Viewport
 *
 * @type {Function} renders Viewport component
 */
const Viewport = () => {
  const viewportRef = useRef(null);

  useEffect(() => {
    // gets width of dom element
    const width = viewportRef.current.clientWidth;
    // gets height dom element
    const height = viewportRef.current.clientHeight;

    // three.js variables
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 20000);
    const light = new THREE.HemisphereLight(0xe0e0e0, 0x333333, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    let frameId;

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);

    /**
     * initOrbits
     *
     * @type {Function} initializes orbit parameters
     *
     */
    const initOrbits = () => {
      controls.rotateSpeed = 1.0;
      controls.zoomSpeed = 1.2;
      controls.panSpeed = 0.8;
      controls.enableDamping = true;
      controls.dampingFactor = 0.07;
      controls.update();
    };

    /**
     * initCamera
     *
     * @type {Function} initializes the camera position
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     *
     */
    const initCamera = (x = 0, y = 0, z = 0) => {
      camera.position.x = x;
      camera.position.y = y;
      camera.position.z = z;
    };

    // add axes helper
    const axesHelper = new THREE.AxesHelper(30);
    scene.add(axesHelper);

    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
    };

    // initialize parameters and animate
    light.position.set(-100, 200, 100); // set light position
    scene.add(light); // add scene light
    scene.background = new THREE.Color(0x121212); // set scene background color
    renderer.setSize(width, height); // set scene size
    viewportRef.current.appendChild(renderer.domElement);
    initOrbits();
    initCamera(-40, 20, 40);
    addMolecule(scene, nanocar);
    animate();

    // cancels and clears animation on when component unmounts
    return () => {
      cancelAnimationFrame(frameId);
      viewportRef.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <section id="viewport" ref={viewportRef} style={{ width: "100%", height: "100%", overflow: "hidden" }} />
      <FPSMonitor />
    </>
  );
};

export default Viewport;
