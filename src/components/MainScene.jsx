import React, {Component, Fragment} from "react";
import * as THREE from "three";
import FPSStats from "react-fps-stats";
import Utils from "../utils/Utils";
import nanocar from "../data/nanocar";

const OrbitControls = require("three-orbit-controls")(THREE);

const axisLength = 30;
const blue = 0x0055ff;
const red = 0xcc0000;
const green = 0x009933;

export default class MainScene extends Component {
    componentDidMount() {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 20000);
        this.camera.position.set(0, 0, 40);

        this.light = new THREE.PointLight(0xFFFFFF); // white light
        this.light.position.set(-100, 200, 100);

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(0x0); // 0xFFFFFF corresponds to white


        this.mount.appendChild(this.renderer.domElement);
        this.initializeOrbits();
        this.initializeCamera();

        this.scene.add(this.light);

        Utils.addLine(this.scene, [axisLength, 0, 0], [-axisLength, 0, 0], red);    // x-axis
        Utils.addLine(this.scene, [0, axisLength, 0], [0, -axisLength, 0], green);  // y-axis
        Utils.addLine(this.scene, [0, 0, axisLength], [0, 0, -axisLength], blue);   // z-axis
        Utils.addMolecule(this.scene, nanocar);

        this.animate();
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.frameId);
        this.mount.removeChild(this.renderer.domElement);
    }

    initializeOrbits = () => {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.07;
        this.controls.rotateSpeed = 0.07;
        this.controls.update();
    };

    initializeCamera = () => {
        this.camera.position.x = 0;
        this.camera.position.y = 0;
        this.camera.position.z = 40;
    };

    animate = () => {
        this.frameId = window.requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
        this.controls.update();

    };

    render() {
        return (<Fragment>
                <div id="boardCanvas" ref={mount => {
                    this.mount = mount
                }}/>
                <FPSStats top={"auto"} left={"auto"} bottom={20} right={20}/>
            </Fragment>
        );
    }
}