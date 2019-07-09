import React, {Component} from "react";
import * as THREE from "three";
import FPSStats from "react-fps-stats";
import Utils from "../utils/Utils";
import nanocar from "../data/nanocar";

const OrbitControls = require("three-orbit-controls")(THREE);

export default class MainScene extends Component {
    componentDidMount() {
        this.setupScenes();

        this.initializeOrbits();
        this.initializeCamera();

        Utils.addMolecule(this.scene, nanocar);

        this.setupHelpers();
        this.animate();
    }


    setupScenes() {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 20000);
        this.light = new THREE.PointLight(0xFFFFFF); // white light
        this.camera.position.set(0, 0, 40);
        this.light.position.set(-100, 200, 100);
        this.renderer.setSize(width, height);
        this.renderer.setClearColor(0x474747); // 0xFFFFFF corresponds to white
        this.mount.appendChild(this.renderer.domElement);
        this.scene.add(this.light);
    }


    setupHelpers() {
        const insetWidth = 150, insetHeight = 150;
        this.gridXZ = new THREE.GridHelper(1000, 100);
        this.gridXZ.position.set(0, -100, 0);
        this.axisHelper = new THREE.AxisHelper(10);

        this.helperDom.width = insetWidth;
        this.helperDom.height = insetHeight;
        // renderer
        this.helperRenderer = new THREE.WebGLRenderer({alpha: true});
        this.helperRenderer.setClearColor(0x000000, 0);
        this.helperRenderer.setSize(insetWidth, insetHeight);
        this.helperDom.appendChild(this.helperRenderer.domElement);
        // scene
        this.helperScene = new THREE.Scene();
        // camera
        this.helperCamera = new THREE.PerspectiveCamera(50, insetWidth / insetHeight, 1, 1000);
        this.helperCamera.up = this.camera.up; // important!
        // axes
        const axesHelper2 = new THREE.AxesHelper(100);

        this.helperScene.add(axesHelper2);
        this.scene.add(this.gridXZ);
        this.scene.add(this.axisHelper);

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
        this.helperAnimate();
        this.controls.update();
    };

    helperAnimate = () => {
        this.helperCamera.position.copy(this.camera.position);
        this.helperCamera.position.sub(this.controls.target);
        this.helperCamera.position.setLength(300);
        this.helperCamera.lookAt(this.helperScene.position);
        this.helperRenderer.render(this.helperScene, this.helperCamera);
    };

    render() {
        return (<div id="mainScene">
                <div id="boardCanvas" ref={mount => {
                    this.mount = mount
                }}>
                </div>
                <div id="helperCanvas" ref={helper => {
                    this.helperDom = helper
                }}/>
                <FPSStats top={"auto"} left={"auto"} bottom={20} right={20}/>
            </div>
        );
    }
}