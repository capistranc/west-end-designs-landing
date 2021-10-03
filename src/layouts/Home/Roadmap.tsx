import {
  Flex,
  Heading,
  Box,
  Text,
  Image,
  Icon,
  SimpleGrid,
  Button,
  Spacer,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { theme } from "../../theme/colors";

import { DashedLine } from "../../components/svg/DashedLine";
import { FaAddressCard } from "react-icons/fa";
import { GiMagnifyingGlass, GiArchBridge, GiCrosshair } from "react-icons/gi";
import { MdHeadsetMic } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { SlideIn } from "../../components/Motion/SlideIn";
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
      <Box
        borderRadius="full"
        border="1em solid"
        borderColor={useColorModeValue("blue.200", "teal.700")}
        p="2rem"
      >
        <Icon as={icon} boxSize="5rem" />
      </Box>
      <Text p="4" align="left" width={width}>
        {text}
      </Text>
    </Flex>
  );
};

export const Roadmap = ({ ...props }) => {
  const { colorMode } = useColorMode();

  const data = [
    {
      headerProps: {
        title: "Research",
        step: 1,
        stepProps: {
          color: "teal.50",
        },
      },
      icon: GiMagnifyingGlass,
      text: "We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly.",
      orient: "left",
    },
  ];

  return (
    <Box position="relative" align="center" overflow="hidden">
      <Box
        align="center"
        color="white"
        backgroundColor={useColorModeValue("blue.400", "teal.800")}
      >
        <DashedLine
          strokeColors={useColorModeValue("white", theme.toHex("teal.900"))}
        />
        <DashedLine
          strokeColors={useColorModeValue("white", theme.toHex("teal.900"))}
        />
        <SlideIn from="right">
          <RoadmapSlide
            py="4"
            icon={GiMagnifyingGlass}
            headerProps={{
              title: "Research",
              step: 1,
              stepProps: {
                color: "teal.50",
              },
            }}
            text="We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly."
          />
        </SlideIn>

        <DashedLine
          strokeColors={useColorModeValue("white", theme.toHex("teal.900"))}
        />

        <SlideIn from="left">
          <RoadmapSlide
            py="4"
            icon={GiCrosshair}
            orient="right"
            headerProps={{
              title: "Strategize",
              step: 2,
              stepProps: {
                color: "teal.200",
              },
            }}
            text="We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly."
          />
        </SlideIn>
        <DashedLine
          strokeColors={useColorModeValue("white", theme.toHex("teal.900"))}
        />
        <SlideIn from="right">
          <RoadmapSlide
            icon={GiArchBridge}
            py="4"
            headerProps={{
              title: "Design",
              step: 3,
              stepProps: {
                color: "teal.500",
              },
            }}
            text="We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly."
          />
        </SlideIn>

        <DashedLine
          strokeColors={useColorModeValue("white", theme.toHex("teal.900"))}
        />
        <SlideIn from="left">
          <RoadmapSlide
            icon={BiCodeAlt}
            py="4"
            orient="right"
            headerProps={{
              title: "Develop",
              step: 4,
              stepProps: {
                color: "blue.500",
              },
            }}
            text="We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly."
          />
        </SlideIn>
        <DashedLine
          strokeColors={useColorModeValue("white", theme.toHex("teal.900"))}
        />

        <SlideIn from="right">
          <RoadmapSlide
            icon={MdHeadsetMic}
            py="4"
            headerProps={{
              title: "Support",
              step: 5,
              stepProps: {
                color: "blue.600",
              },
            }}
            text="We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly."
          />
        </SlideIn>

        <DashedLine
          strokeColors={useColorModeValue("white", theme.toHex("teal.900"))}
        />
        <DashedLine
          strokeColors={useColorModeValue("white", theme.toHex("teal.900"))}
        />
      </Box>
    </Box>
  );
};
