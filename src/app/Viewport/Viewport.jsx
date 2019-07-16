/**
 * Viewport.jsx
 *
 * @description responsible for rendering interactive 3D nano car assemble screen
 */

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import FPSMonitor from "../commons";
import { nanocar } from "../../data";
import { addLine, addMolecule } from "../../utils";

// get OrbitControls object
const OrbitControls = require("three-orbit-controls")(THREE);

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
    const light = new THREE.PointLight(0xffffff); // white light
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
      controls.rotateSpeed = 0.07;
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

    // axis parameters
    const axisLength = 30;
    const red = 0xe53935; // in respect to x-axis
    const green = 0x00e676; // in respect to y-axis
    const blue = 0x1976d2; // in respect to z-axis

    // add axis lines
    // x-axis
    addLine(scene, [axisLength, 0, 0], [-axisLength, 0, 0], red);
    // y-axis
    addLine(scene, [0, axisLength, 0], [0, -axisLength, 0], green);
    // z-axis
    addLine(scene, [0, 0, axisLength], [0, 0, -axisLength], blue);

    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
    };

    // initialize parameters and animate
    light.position.set(-100, 200, 100);
    scene.add(light);
    renderer.setSize(width, height);
    renderer.setClearColor(0x0); // 0xFFFFFF corresponds to white
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
      <section
        id="viewport"
        ref={viewportRef}
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
      />
      <FPSMonitor />
    </>
  );
};

export default Viewport;
