import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const CursorFollower = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <motion.div
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
      className="pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full bg-neutral-900 mix-blend-difference z-50"
    />
  );
};

export default CursorFollower;
