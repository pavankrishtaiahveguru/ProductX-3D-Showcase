import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const Accordion = ({ items }) => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = active === index;
        return (
          <div
            key={index}
            className="border border-neutral-200 rounded-xl overflow-hidden"
          >
            {/* header */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-center items-center px-6 py-4 text-left font-medium hover:bg-neutral-50 transition"
            >
              {item.title}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <FiChevronDown size={20} />
              </motion.span>
            </button>

            {/* content */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 overflow-hidden"
                >
                  <div className="py-4 text-neutral-500 leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
