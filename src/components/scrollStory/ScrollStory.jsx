import { motion } from "framer-motion";
import StickySection from "./StickySection";

const ScrollStory = () => {
  const sections = [
    {
      title: "Designed for Performance",
      desc: "Experience unmatched speed and efficiency.",
      img: "https://pngimg.com/uploads/iphone16/iphone16_PNG18.png",
    },
    {
      title: "Built with Precision",
      desc: "Crafted using premium materials and design.",
      img: "https://pngimg.com/uploads/iphone16/iphone16_PNG23.png",
    },
    {
      title: "Future Ready",
      desc: "Innovative features redefining experience.",
      img: "https://pngimg.com/uploads/iphone16/iphone16_PNG20.png",
    },
  ];
  return (
    <>
      {sections.map((section, index) => (
        <StickySection key={index} {...section} />
      ))}
    </>
  );
};

export default ScrollStory;
