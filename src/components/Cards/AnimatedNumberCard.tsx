import { Box, Icon, Text, Flex, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import { theme } from "../../theme";

export const AnimateNumber = ({
  id,
  to,
  from = "0",
  speed = undefined,
  duration = 2000,
  variant = null,
  ...props
}) => {
  useEffect(() => {
    const animate = () => {
      const continueVariant = () => {
        counter.innerText = "" + Math.ceil(data + 1);
        setTimeout(animate, Math.random() * 8000);
      };

      const counter = document.getElementById(id || "counter");
      const value = +counter.getAttribute("to");
      const data = +counter.innerText;
      let increment = speed
        ? value / speed
        : (value / (duration / 100)) * Math.random();

      if (data < value) {
        counter.innerText = "" + Math.ceil(data + increment);
        setTimeout(animate, 100);
      } else {
        counter.innerText = "" + value;

        if (variant === "continue") {
          continueVariant();
        }
      }
    };

    animate();
  });

  return (
    <Box id={id || "counter"} to={to} {...props} textStyle="h2">
      {from}
    </Box>
  );
};

import { BorderedIconOffset } from "../Icons/BorderedIconOffset";

export const AnimatedNumberCard = ({
  title,
  value,
  unit,
  icon,
  variant = null,
  duration = 2000,
  iconSize = "5rem",
  iconColor = "blue",
  ...props
}) => {
  return (
    <Box {...props}>
      <BorderedIconOffset
        boxSize="7rem"
        innerBoxSize="6rem"
        iconSize="5em"
        icon={icon}
      />

      <AnimateNumber
        id={`${title}-counter`}
        fontSize="4xl"
        fontWeight="900"
        to={value}
        duration={duration}
        variant={variant}
        d="inline"
      />
      <Text
        d="inline"
        // color={theme.fg[colorMode]}
      >
        {" "}
        +{" "}
      </Text>

      <Text
        fontSize="md"
        fontWeight="bold"
        textStyle="h1"
        // color={theme.fg[colorMode]}
      >
        {" "}
        {unit}
      </Text>
    </Box>
  );
};
