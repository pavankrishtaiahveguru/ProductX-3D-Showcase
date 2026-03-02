export const imageAnim = {
  hidden: { opacity: 0, y: 80, scale: 1.2 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
};

export const textAnim = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6 },
  }),
};
