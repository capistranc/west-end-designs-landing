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
import { RoadmapSlide } from "../../components/Lists/RoadmapSlide";
import { DashedLine } from "../../components/svg/DashedLine";
import { GiMagnifyingGlass, GiArchBridge, GiCrosshair } from "react-icons/gi";
import { MdHeadsetMic } from "react-icons/md";
import { BiCodeAlt, BiWalk } from "react-icons/bi";
import { SlideIn } from "../../components/Motion/SlideIn";
import { DiagonalDecoratorBottomLeftMinus } from "../../components/Decorators";

export const Roadmap = ({ ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      position="relative"
      align="center"
      overflow="hidden"
      backgroundColor={theme.bg2[colorMode]}
    >
      <DiagonalDecoratorBottomLeftMinus bg={theme.bg3[colorMode]} />

      <DashedLine />
      <Box position="relative" py="4" zIndex="10">
        <Button
          variant="solid"
          fontSize="1.5rem"
          height="4rem"
          color={theme.wb[colorMode]}
          bg={theme.bw[colorMode]}
        >
          {" "}
          GET STARTED NOW{" "}
        </Button>
      </Box>

      <Box align="center" color="white" backgroundColor={theme.bg2[colorMode]}>
        <DashedLine strokeColors={theme.bg[colorMode]} />
        <DashedLine strokeColors={theme.bg[colorMode]} />
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

        <DashedLine strokeColors={theme.bg[colorMode]} />

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
        <DashedLine strokeColors={theme.bg[colorMode]} />
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

        <DashedLine strokeColors={theme.bg[colorMode]} />
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
        <DashedLine strokeColors={theme.bg[colorMode]} />

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

        <DashedLine strokeColors={theme.bg[colorMode]} />
        <DashedLine strokeColors={theme.bg[colorMode]} />
      </Box>
    </Box>
  );
};
