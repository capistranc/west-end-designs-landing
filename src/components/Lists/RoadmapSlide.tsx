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
              strokeDasharray={`${(headerProps.step - 1) * 25 * 2.89026},2000`}
            />
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

      <Text p="4" align="left" width={width}>
        {text}
      </Text>
    </Flex>
  );
};
