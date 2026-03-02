import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const StickySection = ({ title, desc, img }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end 80%"],
  });

  // ✅ hooks must be top-level
  const baseScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.02, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.6, 1]);
  const yTranslate = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const imageParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[120vh] py-8 md:py-5"
      role="region"
      aria-label={`${title} showcase section`}
    >
      <div className="sticky top-24 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* ⭐ Text */}
            <motion.div
              style={{ opacity, y: yTranslate }}
              className="order-2 md:order-1"
            >
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
                {title}
              </h2>
              <p className="mt-6 text-lg text-neutral-600 max-w-lg leading-relaxed font-light">
                {desc}
              </p>
            </motion.div>

            {/* ⭐ Image */}
            <motion.div
              style={{ y: imageParallax }}
              className="order-1 md:order-2 flex justify-center items-center"
            >
              <motion.div style={{ scale: baseScale, opacity }}>
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StickySection;