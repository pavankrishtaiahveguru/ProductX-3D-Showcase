// src/components/productViewer/ViewerAnimations.js

import * as THREE from "three";

/* ------------------------------------------------ */
/* 🎥 CAMERA PRESETS (per section / state)
/* ------------------------------------------------ */

export const cameraPresets = {
  default: {
    position: new THREE.Vector3(0, 0, 5),
    lookAt: new THREE.Vector3(0, 0, 0),
    fov: 35,
  },

  zoomed: {
    position: new THREE.Vector3(0, 0, 3.2),
    lookAt: new THREE.Vector3(0, 0, 0),
    fov: 28,
  },

  sideView: {
    position: new THREE.Vector3(2.5, 0, 4),
    lookAt: new THREE.Vector3(0, 0, 0),
    fov: 35,
  },

  topAngle: {
    position: new THREE.Vector3(0, 2.2, 4),
    lookAt: new THREE.Vector3(0, 0, 0),
    fov: 35,
  },
};

/* ------------------------------------------------ */
/* 📱 MODEL ANIMATION PRESETS
/* ------------------------------------------------ */

export const modelPresets = {
  idle: {
    rotation: new THREE.Euler(0, 0, 0),
  },

  rotateLeft: {
    rotation: new THREE.Euler(0, Math.PI / 4, 0),
  },

  rotateRight: {
    rotation: new THREE.Euler(0, -Math.PI / 4, 0),
  },

  tilt: {
    rotation: new THREE.Euler(-0.2, Math.PI / 6, 0),
  },
};

/* ------------------------------------------------ */
/* 💡 LIGHTING PRESETS
/* ------------------------------------------------ */

export const lightPresets = {
  soft: {
    intensity: 1,
  },

  dramatic: {
    intensity: 1.8,
  },

  dim: {
    intensity: 0.5,
  },
};

/* ------------------------------------------------ */
/* 🔄 INTERPOLATION HELPERS
/* ------------------------------------------------ */

export const lerp = (start, end, t) => {
  return start + (end - start) * t;
};

export const vectorLerp = (v1, v2, t) => {
  return new THREE.Vector3(
    lerp(v1.x, v2.x, t),
    lerp(v1.y, v2.y, t),
    lerp(v1.z, v2.z, t)
  );
};

export const eulerLerp = (e1, e2, t) => {
  return new THREE.Euler(
    lerp(e1.x, e2.x, t),
    lerp(e1.y, e2.y, t),
    lerp(e1.z, e2.z, t)
  );
};

/* ------------------------------------------------ */
/* 📜 SCROLL RANGE MAPPER
/* ------------------------------------------------ */

export const mapScrollToRange = (
  scrollProgress,
  inputStart,
  inputEnd,
  outputStart,
  outputEnd
) => {
  if (scrollProgress <= inputStart) return outputStart;
  if (scrollProgress >= inputEnd) return outputEnd;

  const t =
    (scrollProgress - inputStart) / (inputEnd - inputStart);

  return lerp(outputStart, outputEnd, t);
};