import { HeadingProps, Heading, useColorModeValue } from "@chakra-ui/react";

export const FooterHeading = (props: HeadingProps) => (
  <Heading
    as="h4"
    fontSize="sm"
    fontWeight="semibold"
    textTransform="uppercase"
    letterSpacing="wider"
    {...props}
  />
);
