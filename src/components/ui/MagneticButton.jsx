import { useMotionValue, useSpring, motion } from "framer-motion";
import { useRef } from "react";

const MagneticButton = ({ children }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);


  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2); 

    x.set(dx * 0.25);
    y.set(dy * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="px-8 py-3 rounded-full bg-neutral-900 text-white shadow-lg hover:shadow-xl transition cursor-pointer"
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;