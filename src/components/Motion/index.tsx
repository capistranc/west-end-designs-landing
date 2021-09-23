import { motion } from "framer-motion";
import {
  SimpleGrid,
  SimpleGridProps,
  Flex,
  FlexProps,
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Text,
  TextProps,
} from "@chakra-ui/react";

export const MotionGrid = motion<SimpleGridProps>(SimpleGrid);
export const MotionFlex = motion<FlexProps>(Flex);
export const MotionBox = motion<BoxProps>(Box);
export const MotionButton = motion<ButtonProps>(Button);
export const MotionText = motion<TextProps>(Text);

export * from "./SlideListItem";
export * from "./LoadingIcon";
