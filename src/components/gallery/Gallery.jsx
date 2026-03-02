import React from "react";
import MasonryGrid from "./MasonryGrid";

const Gallery = () => {
  const images = [
    "https://pngimg.com/uploads/iphone16/iphone16_PNG23.png",
    "https://pngimg.com/uploads/iphone16/iphone16_PNG18.png",
    "https://pngimg.com/uploads/iphone16/iphone16_PNG20.png",
  ];
  return (
    <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold">Product Gallery</h2>
            <p className="mt-4 text-neutral-500">Explore the product from every angle.</p>
            <div className="mt-16">
                <MasonryGrid images={images}/>
            </div>
        </div>
    </section>
  )
};

export default Gallery;
