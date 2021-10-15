import { MotionBox, MotionButton, MotionFlex } from ".";
import {
  Box,
  useColorMode,
  Flex,
  Text,
  Heading,
  Icon,
  IconButton,
  BoxProps,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { AnimatePresence } from "framer-motion";
import { DashedLine, Line } from "../svg/DashedLine";
import NextImage from "next/image";
import { theme } from "../../theme";
import { useState } from "react";

const colorVariant = {
  rest: {
    y: 0,
    backgroundColor: "rgba(0.9,0.9,0.9,0.9)",
    // backgroundColor: "rgba(0,0,0,0)",
  },
  hover: {
    // y: 100,
    backgroundColor: "rgba(0.2,0.2,0.2,0.2)",
    transition: {
      type: "linear",
    },
  },
};

const flipVariant = {
  rest: {
    y: 0,
    backgroundColor: "rgba(0,0,0,0)",
  },
  hover: ({ percent, ...props }) => ({
    y: percent,
    color: "#FFFFFF",
    backgroundColor: "rgba(0.4,0.4,0.4,0)",
    ...props,
    transition: { type: "linear" },
  }),
};

const showVariant = {
  rest: {
    y: -200,
    opacity: 0,
  },
  hover: {
    y: 0,
    opacity: 1,
    transition: { type: "linear" },
  },
};

type Props = {
  name: string;
  title: string;
  image: string;
  children: JSX.Element;
} & BoxProps;

export const HoverChildrenImage = ({
  name,
  title,
  image,
  children,
  ...props
}: Props): JSX.Element => {
  const { colorMode } = useColorMode();
  const [isFocused, setFocus] = useState(false);

  return (
    <>
      <Flex direction="column" alignItems="center" justify="center" {...props}>
        <AnimatePresence>
          <MotionBox
            position="relative"
            initial="rest"
            animate={isFocused ? "hover" : "rest"}
            onFocus={() => setFocus(true)}
            onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
            onBlur={() => setFocus(false)}
          >
            <MotionBox
              variants={showVariant}
              width="100%"
              position="absolute"
              pb="4"
              bottom="5%"
              boxShadow="lg"
              custom={theme.bg2[colorMode]}
            >
              {children}
            </MotionBox>

            <Box
              position="relative"
              height={["14rem", "18rem", "22rem", "26rem"]}
              width={["18rem", "22rem", "26rem", "30rem"]}
            >
              <NextImage src={image} layout="fill" objectFit="cover" />
              <MotionBox
                position="absolute"
                variants={colorVariant}
                custom="bottom"
                top="0"
                h="100%"
                w="100%"
                sx={{
                  mixBlendMode: "color",
                }}
              />
            </Box>
            <MotionBox
              position="relative"
              variants={flipVariant}
              custom={{ percent: "-50%" }}
            >
              <Line strokeColor="white" />
            </MotionBox>
            <MotionBox
              position="relative"
              variants={flipVariant}
              custom={{
                percent: "-150%",
                backgroundColor: "rgba(0.4,0.4,0.4,0.4)",
              }}
              className="Text"
            >
              <Heading mb="2"> {name}</Heading>
              <Text>{title}</Text>
            </MotionBox>
          </MotionBox>
        </AnimatePresence>
      </Flex>
    </>
  );
};
