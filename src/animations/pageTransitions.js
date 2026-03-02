export const pageVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
  exit: { opacity: 0, y: -40 },
};
