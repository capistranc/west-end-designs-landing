import { Flex, Box, Image } from "@chakra-ui/react";

export const section6 = () => {
  const bgImage = "url('/images/guyStandingNextToMobilePhone.svg')";

  return (
    <>
      <Box p={10} display={{ lg: "inline" }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            // width={{ sm: "50%" }}
            src="/images/guyStandingNextToMobilePhone.svg"
            alt="Guy standing next to mobile phone"
          />
        </Box>
      </Box>
    </>
  );
};
