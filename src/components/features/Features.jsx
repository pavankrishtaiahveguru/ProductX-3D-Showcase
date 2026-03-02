import { FiCpu, FiZap, FiShield } from "react-icons/fi";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";
import { containerVariant } from "../../animations/framerVariants";

const Features = () => {
  const data = [
    {
      title: "Powerful Performance",
      desc: "Experience unmatched speed and efficiency.",
      icon: <FiCpu />,
    },
    {
      title: "Fast & Responsive",
      desc: "Lightning-fast interactions and smooth animations.",
      icon: <FiZap />,
    },
    {
      title: "Secure & Reliable",
      desc: "Built with advanced security and durability.",
      icon: <FiShield />,
    },
  ];
  return (
    <section className="p-3 py-16 sm:py-24 lg:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Why Choose ProductX</h2>
        <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
          Designed with innovation, performance and reliability at its core.
        </p>
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {data.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
