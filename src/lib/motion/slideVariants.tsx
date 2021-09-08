export const slideVariants = {
  initLeft: {
    x: "-100vw",
  },
  center: {
    x: 0,
    y: 0,
    transition: {
      duration: 0.75,
      type: "tween",
    },
  },
  initRight: { x: "100vw" },
  initBottom: { y: "100vh" },
  initTop: { y: "-100vh" },
};

export const slideFrom = (from: string) => {
  const left = {
    initial: slideVariants.initLeft,
    animate: slideVariants.center,
  };

  const right = {
    initial: slideVariants.initRight,
    animate: slideVariants.center,
  };
  const bottom = {
    initial: slideVariants.initBottom,
    animate: slideVariants.center,
  };
  const top = {
    initial: slideVariants.initTop,
    animate: slideVariants.center,
  };

  const slide = { left, right, top, bottom };
  return slide[from];
};
