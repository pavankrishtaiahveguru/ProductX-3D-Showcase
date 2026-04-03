import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TiltCard from "../ui/TiltCard";

const MasonryGrid = ({ images }) => {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* 📸 Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {images.map((img, index) => (
          <TiltCard key={index}>
            <motion.img
              src={img}
              alt="gallery"
              onClick={() => setActive(img)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 80 }}
              className="w-full rounded-2xl shadow-sm hover:shadow-lg cursor-pointer break-inside-avoid"
            />
          </TiltCard>
        ))}
      </div>

      {/* 🔍 Modal (Zoom View) */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.img
              src={active}
              alt="zoom"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
              className="w-[300px] md:w-[500px] rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MasonryGrid;
