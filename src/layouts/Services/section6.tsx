import { Flex, Box, Image } from "@chakra-ui/react";

export const section6 = () => {
  const bgImage = "url('/images/undraw_Job_hunt_re_q203.svg')";

  return (
    <>
      <Box p={4} display={{ lg: "inline" }}>
        <Box flexShrink={0}>
          <Image
            borderRadius="lg"
            width={{ sm: "50%" }}
            src="/images/undraw_Job_hunt_re_q203.svg"
            alt="Guy hitting check marks"
          />
        </Box>
      </Box>
    </>
  );
};
