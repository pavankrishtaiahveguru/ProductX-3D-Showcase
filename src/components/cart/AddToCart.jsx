import React, { useState } from "react";
import { motion } from "framer-motion";

const AddToCart = () => {
  const [qty, setQty] = useState(1);

  return (
    <section className="py-32 px-6 text-center max-w-4xl mx-auto">
      {/* heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-bold"
      >
        Ready to Experience the Future?
      </motion.h2>

      {/* price */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-xl font-semibold"
      >
        ₹89,999
      </motion.p>

      {/* quantity */}
      <div className="mt-8 flex justify-center items-center gap-4">
        {/* ➖ Decrease */}
        <button
          onClick={() => setQty((q) => q - 1)}
          disabled={qty === 1}
          className={`px-4 py-2 border rounded-lg transition 
            ${
              qty === 1
                ? "opacity-40 cursor-not-allowed"
                : "cursor-pointer hover:bg-gray-100"
            }`}
        >
          -
        </button>

        {/* Qty */}
        <span className="text-lg font-medium w-6 text-center">{qty}</span>

        {/* ➕ Increase */}
        <button
          onClick={() => setQty((q) => q + 1)}
          disabled={qty === 10}
          className={`px-4 py-2 border rounded-lg transition 
            ${
              qty === 10
                ? "opacity-40 cursor-not-allowed"
                : "cursor-pointer hover:bg-gray-100"
            }`}
        >
          +
        </button>
      </div>

      {/* add to cart */}
      <motion.button
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-10 py-4 rounded-full bg-neutral-900 text-white shadow-lg hover:shadow-xl transition cursor-pointer"
      >
        Add To Cart
      </motion.button>
    </section>
  );
};

export default AddToCart;
