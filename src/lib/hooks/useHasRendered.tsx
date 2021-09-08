import { truncate } from "fs/promises";
import { useState, useEffect } from "react";

export const useHasrendered = (ref, rootMargin = "0px") => {
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasRendered(true);
      },
      {
        rootMargin,
      }
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
