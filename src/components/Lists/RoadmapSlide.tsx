import {
  Flex,
  Box,
  Text,
  Icon,
  Button,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { theme } from "../../theme/colors";
import { PercentBorder } from "../Icons/PercentBorder";

export const RoadmapSlide = ({
  headerProps,
  icon,
  text,
  orient = "left",
  ...props
}) => {
  const Header = ({ step, title, orient, stepProps = {}, ...props }) => {
    return (
      <Flex
        align="center"
        justify={{ base: "center", md: orient == "left" ? "end" : "start" }}
        flexDirection={orient == "left" ? "row" : "row-reverse"}
        px="4"
        width="20em"
        {...props}
      >
        <Box positon="relative" width="108px" height="144px">
          <Text
            position="absolute"
            fontWeight="bold"
            fontSize="8xl"
            {...stepProps}
          >
            0{step}
          </Text>
        </Box>

        <Text fontWeight="bold" fontSize="3xl">
          {title}
        </Text>
      </Flex>
    );
  };

  const width = ["20em", "22em", "24em", "30em"];

  const { colorMode } = useColorMode();
  return (
    <Flex
      direction={{
        base: "column",
        md: orient == "left" ? "row" : "row-reverse",
      }}
      justifyContent="center"
      align="center"
      {...props}
    >
      <Header {...headerProps} orient={orient} width={width} />

      <PercentBorder percent={(headerProps.step - 1) * 25} icon={icon} />

      <Box p="4" align="left" width={width}>
        {text}
      </Box>
    </Flex>
  );
};
