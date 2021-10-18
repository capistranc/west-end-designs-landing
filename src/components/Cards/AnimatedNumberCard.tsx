import { Box, Icon, Text, Flex, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoMdReturnRight } from "react-icons/io";
import { theme } from "../../theme";

export const AnimateNumber = ({
  id,
  to,
  from = 0,
  speed = undefined,
  duration = 2000,
  variant = null,
  ...props
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value >= to && variant != "continue") return;

    const add = () => {
      const increment = () => {
        let increment = speed
          ? to / speed
          : (to / (duration / 50)) * Math.random();

        setValue(Math.min(Math.ceil(value + increment), to));
      };
      return setTimeout(increment, 50);
    };

    const continuousVariant = () => {
      return setTimeout(() => {
        setValue(value + 1);
      }, Math.random() * 6000);
    };

    const timerId =
      value >= to && variant == "continue" ? continuousVariant() : add();

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  return (
    <Box id={id || "counter"} to={to} {...props} textStyle="h2">
      {value}
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
      <Text d="inline"> + </Text>

      <Text fontSize="md" fontWeight="bold" textStyle="h1">
        {" "}
        {unit}
      </Text>
    </Box>
  );
};
