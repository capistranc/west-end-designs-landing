import { Flex, Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
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
import { IconType } from "react-icons";

type ServiceData = {
  title: string;
  icon: IconType;
  text: string | JSX.Element;
  link: string;
};

type Props = {
  data: ServiceData[];
};

export const SixTiles = ({ data, ...props }: Props): JSX.Element => {
  const styling = [
    {
      borderTop: { sm: "none" },
      borderLeft: { sm: "none" },
    },
    {
      borderTop: { sm: "none" },
      borderRight: { sm: "none", lg: `solid thin ${theme.toHex("gray.100")}` },
    },
    {
      borderTop: { lg: "none" },
      borderRight: { lg: "none" },
      borderLeft: { sm: "none", lg: `solid thin ${theme.toHex("gray.100")}` },
    },
    {
      borderBottom: { lg: "none" },
      borderLeft: { lg: "none" },
      borderRight: { sm: "none", lg: `solid thin ${theme.toHex("gray.100")}` },
    },
    {
      borderBottom: { sm: "none" },
      borderLeft: { sm: "none", lg: `solid thin ${theme.toHex("gray.100")}` },
    },
    {
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
          {data.map((service, i) => {
            return (
              <ExpandColorIcon
                border={{ sm: `solid thin ${theme.toHex("gray.100")}` }}
                key={i}
                {...service}
                {...styling[i]}
                maxWidth="28rem"
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
