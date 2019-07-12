import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FPSMonitor } from "../commons";
import { addLine, addMolecule } from "../../utils";
import { nanocar } from "../../data";

const OrbitControls = require("three-orbit-controls")(THREE);

const axisLength = 30;
const blue = 0x0055ff;
const red = 0xcc0000;
const green = 0x009933;

const ViewPort = () => {
  const mount = useRef(null);

  useEffect(() => {
    const width = mount.current.clientWidth;
    const height = mount.current.clientHeight;
    const scene = new THREE.Scene();
    let frameId;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 20000);
    camera.position.set(0, 0, 40);

    const light = new THREE.PointLight(0xffffff); // white light
    light.position.set(-100, 200, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x0); // 0xFFFFFF corresponds to white

    mount.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    const initializeOrbits = controls => {
      controls.rotateSpeed = 1.0;
      controls.zoomSpeed = 1.2;
      controls.panSpeed = 0.8;
      controls.enableDamping = true;
      controls.dampingFactor = 0.07;
      controls.rotateSpeed = 0.07;
      controls.update();
    };

    const initializeCamera = camera => {
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 40;
    };

    initializeOrbits(controls);
    initializeCamera(camera);

    scene.add(light);

    addLine(scene, [axisLength, 0, 0], [-axisLength, 0, 0], red); // x-axis
    addLine(scene, [0, axisLength, 0], [0, -axisLength, 0], green); // y-axis
    addLine(scene, [0, 0, axisLength], [0, 0, -axisLength], blue); // z-axis
    addMolecule(scene, nanocar);

    const animate = () => {
      frameId = window.requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update();
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <section
        id="boardCanvas"
        ref={mount}
        style={{ width: "100%", height: "100%" }}
      />
      <FPSMonitor />
    </>
  );
};

export default ViewPort;
