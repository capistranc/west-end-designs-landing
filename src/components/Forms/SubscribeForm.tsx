import {
  Button,
  chakra,
  HTMLChakraProps,
  Input,
  Stack,
  Text,
  HeadingProps,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

import { init } from "emailjs-com";
init("user_4LtQ3LRB7J6d60KxeHQuY");

const DefaultHeading = (props: HeadingProps) => (
  <Heading
    as="h4"
    color={useColorModeValue("gray.600", "gray.400")}
    fontSize="sm"
    fontWeight="semibold"
    textTransform="uppercase"
    letterSpacing="wider"
    {...props}
  />
);

const SubscribeForm = (props: HTMLChakraProps<"form">) => {
  return (
    <chakra.form {...props} onSubmit={(e) => e.preventDefault()}>
      <Stack spacing="4">
        <DefaultHeading>Subscribe to our newsletter</DefaultHeading>
        <Text>
          Get notified when we add new components or we have exciting news for
          you.
        </Text>
        <Stack spacing="4" direction={{ base: "column", md: "row" }}>
          <Input
            bg={useColorModeValue("white", "inherit")}
            placeholder="Enter your email"
            type="email"
            required
            focusBorderColor={useColorModeValue("blue.500", "blue.300")}
            _placeholder={{
              opacity: 1,
              color: useColorModeValue("gray.500", "whiteAlpha.700"),
            }}
          />
          <Button
            type="submit"
            colorScheme="blue"
            flexShrink={0}
            width={{ base: "full", md: "auto" }}
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </chakra.form>
  );
};

export default SubscribeForm;
