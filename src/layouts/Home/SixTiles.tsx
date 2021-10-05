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
import { BiBookContent } from "react-icons/bi";
import { DashedLine } from "../../components/svg/DashedLine";
import { DiamondDecoratorBottomDown } from "../../components/Decorators";
export const SixTiles = ({ ...props }) => {
  const services = [
    {
      title: "Web Applications",
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
      title: "Full Stack Solutions",
      icon: ImStack,
      text: "If you have an existing codebase or business problem that could use a technology upgrade, contact us for a consult and we can develop an application for you.",
      link: "#contact-form",

      borderTop: { lg: "none" },
      borderRight: { lg: "none" },
      borderLeft: { sm: "none", lg: `solid thin ${theme.toHex("gray.100")}` },
    },
    {
      title: "Development",
      icon: FaLaptopCode,
      text: "Have peace of mind knowing that experts are building your website, so that you don't have to. Our websites are made to run flawlesly on mobile devices, tablets, and PC.",
      link: "#contact-form",

      borderBottom: { lg: "none" },
      borderLeft: { lg: "none" },
      borderRight: { sm: "none", lg: `solid thin ${theme.toHex("gray.100")}` },
    },
    {
      title: "Content Management",
      icon: BiBookContent,
      text: "Figuring out how to explain your business can be hard, and with us you don't have too. Our inhouse team of SEO Copywriters will write all the content for you.",
      link: "#contact-form",

      borderBottom: { sm: "none" },
      borderLeft: { sm: "none", lg: `solid thin ${theme.toHex("gray.100")}` },
    },
    {
      title: "Search Engine Optimization",
      icon: VscGraph,
      text: "More views means more customers. We will make sure your website reaches more eyes by utilizing the power of Google Analytics and modern SEO strategies.",
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
      <DiamondDecoratorBottomDown bg={theme.bg[colorMode]} />

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
      <DashedLine />
      <DashedLine />
      <DashedLine />
    </Box>
  );
};
