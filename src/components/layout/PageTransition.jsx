import { motion } from "framer-motion";
import { pageVariant } from "../../animations/pageTransitions";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
