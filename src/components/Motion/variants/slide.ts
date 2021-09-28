export const slideVariants = {
  initLeft: {
    x: "-100vw",
    opacity: 0,
  },
  center: (params) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      type: "tween",
      ...params,
    },
  }),
  initRight: { x: "6rem", opacity: 0 },
  initBottom: { y: "100vh", opacity: 0 },
  initTop: { y: "-100vh", opacity: 0 },
};

export const slideFrom = (from: string, overrides = {}) => {
  const left = {
    hidden: slideVariants.initLeft,
    show: slideVariants.center(overrides),
  };

  const right = {
    hidden: slideVariants.initRight,
    show: slideVariants.center(overrides),
  };
  const bottom = {
    hidden: slideVariants.initBottom,
    show: slideVariants.center(overrides),
  };
  const top = {
    hidden: slideVariants.initTop,
    show: slideVariants.center(overrides),
  };

  const slide = { left, right, top, bottom };

  return slide[from];
};
