import { useColorModeValue, Box } from "@chakra-ui/react";
import { colors, theme } from "../../theme";
import { AnimatePresence } from "framer-motion";
import { OnRender } from "../Wrappers/OnRender";
import { MotionBox } from "../Motion";

export const DashedLine = ({
  horizontal = false,
  strokeColor = null,
  ...props
}) => {
  const defaultStroke = useColorModeValue(
    colors["teal"][400],
    "rgba(255,255,255,0.8",
  );
  return (
    <Box height="5rem" {...props}>
      <OnRender>
        <AnimatePresence>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, type: "linear", duration: 1 }}
            position="relative"
            zIndex="10"
          >
            <svg
              viewBox="0 0 100 100"
              height="5rem"
              preserveAspectRatio="none"
              {...props}
            >
              <path
                strokeDasharray="12,5"
                strokeWidth="6"
                stroke={strokeColor || defaultStroke}
                d={horizontal ? `M0 50 h 100` : `M50 0 v 100`}
              />
            </svg>
          </MotionBox>
        </AnimatePresence>
      </OnRender>
    </Box>
  );
};
