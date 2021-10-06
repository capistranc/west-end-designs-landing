import { MotionBox } from ".";
import { OnRender } from "../Wrappers/OnRender";
import { useHasRendered } from "../../lib/hooks";
import { Box } from "@chakra-ui/react";
import { useRef } from "react";

const wobbleVariant = {
  hidden: {
    rotate: 20,
    scale: 1,
  },
  show: {
    // scale: [1, 1.2, 1.2, 1.2, 1],
    // rotate: [0, -8, 8, -8, 0],
    rotate: 0,
    transition: {
      type: "spring",
      damping: 2,
    },
  },
};

export const Wobble = ({ children, from = "left", ...props }) => {
  return (
    <OnRender>
      <MotionBox
        h="100%"
        w="100%"
        variants={wobbleVariant}
        initial="hidden"
        animate="show"
      >
        {children}
      </MotionBox>
    </OnRender>
  );
};

// export const Shake = ({ children, ...props }) => {
//   return (
//     <OnRender>
//       <MotionBox variants={wobbleVariant} initial="hidden" animate="show">
//         {children}
//       </MotionBox>
//     </OnRender>
//   );
// };
