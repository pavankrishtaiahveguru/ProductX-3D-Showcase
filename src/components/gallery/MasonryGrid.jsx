import { motion } from "framer-motion";
import { useState } from "react";

const MasonryGrid = ({ images }) => {
  const [active,setActive]=useState(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-6 space-y-6">
        {images.map((img, index) => (
          <motion.img
            src={img}
            key={index}
            alt="gallery"
            onClick={()=>setActive(img)}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="max-w-80 max-h-80 rounded-2xl shadow-sm hover:shadow-md cursor-pointer"
          ></motion.img>
        ))}

        {/* modal */}
        {active&&(
          <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 "
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          onClick={()=>setActive(null)}
          >
            <motion.img 
            src={active}
            alt="zoom" 
            initial={{opacity:0.8}}
            whileInView={{opacity:1}}
            transition={{type:"spring",stiffness:80}}
            onClick={(e)=>e.stopPropagation()}
            className="w-75 md:w-120 drop-shadow-2xl"
            />

          </motion.div>
        )}

      </div>
    </>
  );
};

export default MasonryGrid;
