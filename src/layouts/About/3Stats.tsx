import { Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { theme } from "../../theme";
import { AnimatedNumberCard } from "../../components/Cards/AnimatedNumberCard";
import { ThemeContext } from "@emotion/react";
import { useHasRendered } from "../../lib/hooks";
import { useRef } from "react";

export const ThreeStats = ({ statsData, ...props }) => {
  const { colorMode } = useColorMode();
  const ref = useRef();
  const hasRendered = useHasRendered(ref);
  const borderColor = { light: "transparent", dark: theme.border1[colorMode] };

  return (
    <Flex
      color={theme.fg[colorMode]}
      align="center"
      justify="space-evenly"
      direction={["column", "column", "row", "row"]}
      wrap="wrap"
      bg={theme.bg2[colorMode]}
      ref={ref}
      {...props}
    >
      {hasRendered &&
        statsData.map((data, i) => {
          return (
            <AnimatedNumberCard
              key={i}
              title={"stats" + i}
              py="8"
              my="4"
              mx={{ base: 0, sm: "2" }}
              {...data}
              boxShadow="md"
              border="2px solid"
              borderColor={borderColor[colorMode]}
              minWidth={["16rem", "18rem", "20rem", "22rem"]}
              color={theme.fg[colorMode]}
              bg={theme.bg[colorMode]}
              iconColor={theme.icon[colorMode]}
            />
          );
        })}
    </Flex>
  );
};
