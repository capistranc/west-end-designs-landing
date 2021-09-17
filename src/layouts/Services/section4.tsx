import { Flex, Box, Image } from "@chakra-ui/react";

export const section4 = () => {
  const bgImage = "url('/images/undraw_Job_hunt_re_q203.svg')";

  return (
    <>
      <Box p={10} display={{ lg: "inline" }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            // width={{ sm: "50%" }}
            // height={{ md: "50%" }}
            src="/images/undraw_Job_hunt_re_q203.svg"
            alt="Guy hitting check marks"
          />
        </Box>
      </Box>
    </>
  );
};
