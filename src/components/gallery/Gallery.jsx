import React from "react";
import MasonryGrid from "./MasonryGrid";
import SectionHeading from "../ui/SectionHeading";

const Gallery = () => {
  const images = [
    "https://pngimg.com/uploads/iphone16/iphone16_PNG23.png",
    "https://pngimg.com/uploads/iphone16/iphone16_PNG18.png",
    "https://pngimg.com/uploads/iphone16/iphone16_PNG20.png",
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ✅ Section Heading */}
        <SectionHeading
          title="Product Gallery"
          subtitle="Explore the product from every angle."
        />

        {/* 📸 Gallery Grid */}
        <div className="mt-16">
          <MasonryGrid images={images} />
        </div>

      </div>
    </section>
  );
};

export default Gallery;