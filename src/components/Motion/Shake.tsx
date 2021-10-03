import { MotionBox } from ".";
import { OnRender } from "../Wrappers/OnRender";

const shakeVariant = {
  hidden: {
    rotate: "-10",
  },
  show: {
    rotate: "100deg",
  },
  transition: {
    type: "spring",
    duration: 1,
    mass: 10,
    damping: 0,
  },
};

export const Shake = ({ children, ...props }) => {
  return (
    <OnRender>
      <MotionBox variants={shakeVariant} initial="hidden" animate="show">
        {children}
      </MotionBox>
    </OnRender>
  );
};
