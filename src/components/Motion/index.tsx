import { motion } from "framer-motion";
import {
  SimpleGrid,
  SimpleGridProps,
  Flex,
  FlexProps,
  Box,
  BoxProps,
} from "@chakra-ui/react";

export const MotionGrid = motion<SimpleGridProps>(SimpleGrid);
export const MotionFlex = motion<FlexProps>(Flex);
export const MotionBox = motion<BoxProps>(Box);

export * from "./SlideListItem";
