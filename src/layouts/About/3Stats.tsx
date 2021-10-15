import { Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { theme } from "../../theme";
import { AnimatedNumberCard } from "../../components/Cards/AnimatedNumberCard";
import { ThemeContext } from "@emotion/react";
import { OnRender } from "../../components/Wrappers/OnRender";

export const ThreeStats = ({ statsData, ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <OnRender>
      <Flex
        color={theme.fg[colorMode]}
        align="center"
        justify="space-evenly"
        direction={["column", "column", "row", "row"]}
        wrap="wrap"
        bg={theme.bg2[colorMode]}
        {...props}
      >
        {statsData.map((data, i) => {
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
              borderColor={useColorModeValue(
                "transparent",
                theme.border1[colorMode],
              )}
              minWidth={["16rem", "18rem", "20rem", "22rem"]}
              color={theme.fg[colorMode]}
              bg={theme.bg[colorMode]}
              iconColor={theme.icon[colorMode]}
            />
          );
        })}
      </Flex>
    </OnRender>
  );
};
