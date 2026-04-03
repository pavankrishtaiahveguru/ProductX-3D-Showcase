import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* 🔥 Fade Up On Scroll */
export const scrollFadeUp = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

/* 🔥 Parallax Effect */
export const scrollParallax = (element, y = 100) => {
  gsap.to(element, {
    y,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

/* 🔥 Scale On Scroll */
export const scrollScale = (element) => {
  gsap.fromTo(
    element,
    { scale: 0.9, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        scrub: true,
      },
    }
  );
};