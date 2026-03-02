import { motion } from "framer-motion";
import { itemVariant } from "../../animations/framerVariants";
const FeatureCard = ({ title, desc, icon }) => {
  return (
    <motion.div
      variants={itemVariant}
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      className="p-8 rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-neutral-500 font-sm">{desc}</p>
    </motion.div>
  );
};

export default FeatureCard;
