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

import { MotionBox } from "../../components/Motion";

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
      <Box position="relative">
        {/* <Box
          position="absolute"
          boxSize="11rem"
          borderRadius="full"
          border="1rem solid"
          borderTop="none"
          borderColor={useColorModeValue("blue.200", "teal.800")}
        ></Box> */}
        <Icon
          as={icon}
          boxSize="11rem"
          borderRadius="full"
          border="1rem solid"
          p="1rem"
          borderColor={useColorModeValue("blue.200", "teal.700")}
        />
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
      icon: { GiMagnifyingGlass },
      headerProps: {
        title: "Research",
        step: 1,
        stepProps: {
          color: "teal.50",
        },
      },
      text: "We define your competition and target audience. Discover what is working in your online industry, then design your website accordingly.",
    },
  ];

  return (
    <Box
      position="relative"
      align="center"
      overflow="hidden"
      backgroundColor={useColorModeValue("blue.400", "teal.800")}
    >
      <Box
        position="absolute"
        bottom="-10rem"
        right="0"
        transform="skewY(5deg)"
        bg={useColorModeValue("blue.50", "teal.900")}
        h="10rem"
        zIndex="1"
        w="100%"
      />

      <DashedLine zIndex="10" />
      <Box position="relative" py="4" zIndex="10">
        <Button
          variant="solid"
          fontSize="1.5rem"
          height="4rem"
          bg={useColorModeValue("black", "white")}
          color={useColorModeValue("white", "black")}
        >
          {" "}
          GET STARTED NOW{" "}
        </Button>
      </Box>

      <Box
        align="center"
        color="white"
        backgroundColor={useColorModeValue("blue.400", "teal.800")}
      >
        <DashedLine
          strokeColors={useColorModeValue("white", theme.toHex("teal.900"))}
          zIndex="10"
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
            text="We sit down and gather information about your business, your needs, and your goals."
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
            text="We create a mockup of the web sites design and have our copy writers begin to write up SEO optimized content. We give you 2 free revisions to make sure we can find a design you are happy with."
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
            text="Once you sign off on the design and content, we code the website from scratch. Leveraging modern frameworks to statically generate your site for further SEO optimization."
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
            text="We don't leave you hanging once your website is launched. Lifetime updates are included with our service. Give us a call and we'll respond right away."
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
