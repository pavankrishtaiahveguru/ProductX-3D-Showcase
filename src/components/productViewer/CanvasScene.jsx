import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  OrbitControls,
  useProgress,
  Html,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

import {
  cameraPresets,
  vectorLerp,
} from "./ViewerAnimations";

import useScrollProgress from "../../hooks/useScrollProgress";

/* 🔄 Loader Inside Canvas (TAILWIND) */
const LoaderInside = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-white">
        
        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-white/20 border-t-blue-500 rounded-full animate-spin" />
        
        {/* Progress Text */}
        <p className="mt-2 text-sm tracking-wide">
          {Math.round(progress)}%
        </p>
      </div>
    </Html>
  );
};

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
    <div className="w-full h-[550px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        
        {/* 💡 Lights */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, -5, -5]} intensity={0.6} />

        {/* 📦 Model + Environment */}
        <Suspense fallback={<LoaderInside />}>
          <IphoneModel />
          <Environment preset="city" />
        </Suspense>

        {/* 🎥 Scroll Camera */}
        <ScrollCameraController />

        {/* 🎮 Controls */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default CanvasScene;

/* ⚡ Preload Model */
useGLTF.preload("/models/iphone16promax.glb");