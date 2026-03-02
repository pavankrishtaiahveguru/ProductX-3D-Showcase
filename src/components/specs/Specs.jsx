import React from "react";
import { motion } from "framer-motion";
import Accordion from "./Accordion";

const Specs = () => {
  const items = [
    {
      title: "Performance",
      content:
        "Powered by next-gen processor delivering fast and efficient performance.",
    },
    {
      title: "Display",
      content:
        "High resolution OLED display with immersive color accuracy and brightness.",
    },
    {
      title: "Battery",
      content:
        "Long-lasting battery with fast charging and optimized power management.",
    },
    {
      title: "Camera",
      content:
        "Advanced camera system with AI photography and cinematic video capture.",
    },
  ];
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold text-center"
      >
        Specifications
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-12"
      >
        <Accordion items={items} />
      </motion.div>
    </section>
  );
};

export default Specs;
