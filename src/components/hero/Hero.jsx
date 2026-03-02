import { motion } from "framer-motion";
import { imageAnim, textAnim } from "./HeroAnimations";
import useParallax from "../../hooks/useParallax";
import MagneticButton from "../ui/MagneticButton";
import GradientBackground from "../ui/GradientBackground";

const Hero = () => {
  const yOffset = useParallax(0.15);
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-3">
      {/* animated gradient background  */}
      <GradientBackground />

      {/* product image */}
      <motion.img
        variants={imageAnim}
        initial="hidden"
        animate="visible"
        src="https://pngimg.com/uploads/iphone16/iphone16_PNG24.png"
        alt="Product"
        style={{ transform: `translateY(${yOffset}px)` }}
        className="w-70 md:w-105 drop-shadow-2xl"
      />

      {/* heading */}
      <motion.h1
        variants={textAnim}
        custom={0.2}
        initial="hidden"
        animate="visible"
        className="mt-10 text-4xl md:text-6xl font-bold tracking-tight"
      >
        Experience the Future
      </motion.h1>

      {/* subtitle */}
      <motion.p
        variants={textAnim}
        custom={0.4}
        initial="hidden"
        animate="visible"
        className="mt-4 max-w-xl text-neutral-500"
      >
        Premium product crafted with innovation, performance and modern design.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        variants={textAnim}
        custom={0.6}
        initial="hidden"
        animate="visible"
        className="mt-8 flex gap-4"
      >
        <MagneticButton>Explore</MagneticButton>
        <button className="px-8 py-3 rounded-full border border-neutral-300 hover:bg-neutral-100 transition cursor-pointer">
          Learn More
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
