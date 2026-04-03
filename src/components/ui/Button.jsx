import { motion, scale } from "framer-motion";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-full bg-black text-white  text-sm tracking-wide transition ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
