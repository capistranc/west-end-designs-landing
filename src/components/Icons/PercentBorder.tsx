import { Box, Icon, useColorMode, keyframes } from "@chakra-ui/react";
import { theme } from "../../theme";
import { useEffect } from "react";
// const spin = keyframes`
//   from {transform: rotate(0deg);}
//   to {transform: rotate(360deg)}
// `;
// const spinAnimation = `${spin} infinite 2s linear`;

export const PercentBorder = ({ icon, percent, ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Box position="relative">
      <Box position="absolute" boxSize="12rem">
        <svg viewBox="0 0 100 100" height="12rem" width="12rem">
          <path
            fill="none"
            d="M50,4
        a46,46 0 1,1 0,92
        a46,46 0 1,1 -0,-92"
            stroke={theme.border2[colorMode]}
            strokeWidth="8px"
            strokeDasharray={`${percent * 2.89026},2000`}
          >
            <animate
              attributeName="stroke-dashoffset"
              values={`${percent * 3};0`}
              dur="3s"
            />
          </path>
        </svg>
      </Box>
      <Icon
        as={icon}
        boxSize="12rem"
        borderRadius="full"
        border="16px solid"
        p="1rem"
        borderColor={theme.border1[colorMode]}
      />
    </Box>
  );
};
