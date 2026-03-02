import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import CanvasScene from "./CanvasScene";

const ProductViewer = () => {
  return (
    <section className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16 ">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Explore Every Detail
          </h2>
          <p className="mt-4 text-neutral-500 max-w-md">
            Discover the design and craftsmanship from every angle with our
            interactive viewer
          </p>
        </motion.div>

        {/* 3d CanvasScene */}
        <CanvasScene/>
      </div>
    </section>
  );
};

export default ProductViewer;
