import gsap from "gsap";

/* 🔥 Fade Up Animation */
export const fadeUp = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay,
      ease: "power3.out",
    }
  );
};

/* 🔥 Scale In */
export const scaleIn = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      delay,
      ease: "back.out(1.7)",
    }
  );
};

/* 🔥 Slide From Left */
export const slideLeft = (element) => {
  gsap.fromTo(
    element,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }
  );
};