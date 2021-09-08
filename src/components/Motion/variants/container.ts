export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 100,
    transition: {
      when: "beforeChildren",
      staggerChildren: "1",
    },
  },
};
