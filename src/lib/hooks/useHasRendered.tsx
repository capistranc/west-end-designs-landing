import { truncate } from "fs/promises";
import { useState, useEffect } from "react";

export const useHasRendered = (ref, rootMargin = "0px") => {
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) return setHasRendered(true);
      },
      {
        rootMargin,
      },
    );

    const currentElement = ref?.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.unobserve(currentElement);
    };
  });

  return hasRendered;
};
