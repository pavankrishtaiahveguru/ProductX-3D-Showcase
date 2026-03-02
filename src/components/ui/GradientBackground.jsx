import React from "react";
import { motion } from "framer-motion";

const GradientBackground = () => {
  const blobTransition = {
    duration: 6,
    repeat: Infinity,
    repeatType: "loop",
    ease: "linear",
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* blob 1 */}
      <motion.div
        animate={{ x: [0, 60, -40], y: [0, -40, 60] }}
        transition={blobTransition}
        className="absolute w-105 h-105 bg-blue-400/30 rounded-full blur-3xl top-10 left-10"
      />

      {/* blob 2 */}
      <motion.div
        animate={{ x: [0, 80, 50], y: [0, 60, -60] }}
        transition={blobTransition}
        className="absolute w-105 h-105 bg-purple-400/30 rounded-full blur-3xl bottom-10 right-10"
      />

      {/* blob 3 */}
      <motion.div
        animate={{ x: [0, 40, 50], y: [0, -30, 70] }}
        transition={blobTransition}
        className="absolute w-90 h-90 bg-pink-400/30 rounded-full blur-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default GradientBackground;
