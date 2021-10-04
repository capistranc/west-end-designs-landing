import {
  Flex,
  Heading,
  Box,
  Text,
  Image,
  Icon,
  SimpleGrid,
  Button,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { ExpandColorIcon } from "../../components/Motion/Cards/ExpandColorIcon";
import { theme } from "../../theme/colors";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { GiSmartphone } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { ImStack } from "react-icons/im";
import { VscGraph } from "react-icons/vsc";
import { BsGraphUp } from "react-icons/bs";
import { DashedLine } from "../../components/svg/DashedLine";

export const Services = ({ ...props }) => {
  const services = [
    {
      title: "Web Design",
      icon: HiOutlineDesktopComputer,
      text: `First impressions are important. We all know this. By having a professionaly made website your customers will be confident in your business.`,
      link: "#contact-form",
      borderTop: { sm: "none" },
      borderLeft: { sm: "none" },
    },
    {
      title: "Mobile Designs",
      icon: GiSmartphone,
      text: "Whether you are using the latest iPhone or an old flip phone, our websites load fast. Our statically rendered website designs guarantee this.",
      link: "#contact-form",
      borderTop: { sm: "none" },
      borderRight: { sm: "none", lg: `solid thin ${theme.toHex("gray.100")}` },
    },
    {
      title: "Development",
      icon: FaLaptopCode,
      text: "Have peace of mind knowing that experts are building your website, so that you don't have to. Our websites are made to run flawlesly on mobile devices, tablets, and PC.",
      link: "#contact-form",
      borderTop: { lg: "none" },
      borderRight: { lg: "none" },
      borderLeft: { sm: "none", lg: `solid thin ${theme.toHex("gray.100")}` },
    },
    {
      title: "Search Engine Optimization",
      icon: BsGraphUp,
      text: "Figuring out how to explain your business can be hard, and with us you don't have too. Our inhouse team of SEO Copywriters will write all the content for you.",
      link: "#contact-form",
      borderBottom: { lg: "none" },
      borderLeft: { lg: "none" },
      borderRight: { sm: "none", lg: `solid thin ${theme.toHex("gray.100")}` },
    },
    {
      title: "Analytics",
      icon: VscGraph,
      text: "More views means more customers. We will make sure your website reaches more eyes by utilizing the power of Google Analytics and modern SEO strategies.",
      link: "#contact-form",
      borderBottom: { sm: "none" },
      borderLeft: { sm: "none", lg: `solid thin ${theme.toHex("gray.100")}` },
    },
    {
      title: "Full Stack Applications",
      icon: ImStack,
      text: "If you have an existing codebase or business problem that could use a technology upgrade, contact us for a consult and we can develop an application for you.",
      link: "#contact-form",
      borderBottom: { sm: "none" },
      borderRight: { sm: "none" },
    },
  ];

  const { colorMode } = useColorMode();

  return (
    <Box
      bg={theme.bg[colorMode]}
      color={theme.fg[colorMode]}
      align="center"
      position="relative"
    >
      <Box
        position="absolute"
        bottom="-5rem"
        left="0"
        transform="skewY(5deg)"
        bg={theme.bg[colorMode]}
        h="15rem"
        w="100%"
        zIndex="1"
      />
      <Box
        position="absolute"
        bottom="-5rem"
        right="0"
        transform="skewY(-5deg)"
        bg={theme.bg[colorMode]}
        h="15rem"
        zIndex="1"
        w="50%"
      />

      <Flex direction="row" wrap="wrap" align="center" justify="center">
        <SimpleGrid columns={[1, 2, 2, 3]}>
          {services.map((service, i) => {
            return (
              <ExpandColorIcon
                border={{ sm: `solid thin ${theme.toHex("gray.100")}` }}
                key={i}
                {...service}
                maxWidth="24rem"
                color={theme.fg[colorMode]}
              />
            );
          })}
        </SimpleGrid>
      </Flex>
      <DashedLine zIndex="10" />
      <DashedLine zIndex="10" />
      <DashedLine zIndex="10" />
    </Box>
  );
};
