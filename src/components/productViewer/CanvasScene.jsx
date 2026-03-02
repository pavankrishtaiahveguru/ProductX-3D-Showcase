import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

import {
  cameraPresets,
  vectorLerp,
} from "./ViewerAnimations";

import useScrollProgress from "../../hooks/useScrollProgress";

/* 📱 Iphone Model */

function IphoneModel() {
  const model = useGLTF("/models/iphone16promax.glb");
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (!ref.current) return;

    ref.current.rotation.y = t * 0.4;
    ref.current.position.y = Math.sin(t * 1.5) * 0.12;
  });

  return (
    <primitive
      ref={ref}
      object={model.scene}
      scale={1.4}
      position={[0, -1.2, 0]}
    />
  );
}

/* 🎥 Scroll Camera Controller */

function ScrollCameraController() {
  const { camera } = useThree();
  const scrollProgress = useScrollProgress();

  useFrame(() => {
    // interpolate between default and zoomed preset
    const targetPosition = vectorLerp(
      cameraPresets.default.position,
      cameraPresets.zoomed.position,
      scrollProgress.get()
    );

    camera.position.lerp(targetPosition, 0.08);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  });

  return null;
}

/* 🎬 Canvas Scene */

const CanvasScene = () => {
  return (
    <div className="h-137.5 w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        
        {/* Lights */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, -5, -5]} intensity={0.6} />

        {/* Model + Environment */}
        <Suspense fallback={null}>
          <IphoneModel />
          <Environment preset="city" />
        </Suspense>

        {/* Scroll-based Camera */}
        <ScrollCameraController />

        {/* Optional Controls */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default CanvasScene;

// Preload model
useGLTF.preload("/models/iphone16promax.glb");