import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress, active } = useProgress();

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-9999 flex items-center justify-center backdrop-blur-xl bg-black/40"
        >
          <div className="flex flex-col items-center">
            
            {/* 🔵 Spinner */}
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />

            {/* 📊 Progress */}
            <p className="mt-6 text-white text-sm tracking-widest">
              Loading Experience...
            </p>

            {/* Progress Bar */}
            <div className="w-48 h-0.75 bg-white/20 mt-4 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.4 }}
              />
            </div>

            {/* % Text */}
            <p className="mt-2 text-xs text-white/70">
              {Math.round(progress)}%
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;