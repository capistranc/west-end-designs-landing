import { Flex, Heading, Text, Box } from "@chakra-ui/react";
import { BorderedIconOffset } from "../../components/Icons/BorderedIconOffset";
import { theme } from "../../theme";
import { ContactForm } from "../../components/Forms/ContactForm";
import { MdHeadsetMic } from "react-icons/md";

export const FormSupport = ({ ...props }) => {
  return (
    <Flex
      justify="space-evenly"
      align="center"
      mt="20"
      direction={["column-reverse", "column-reverse", "row", "row"]}
      {...props}
    >
      <ContactForm flex="1" maxWidth="52rem" minWidth={{ md: "28rem" }} />
      <Box
        maxWidth="28rem"
        textAlign="left"
        my="12"
        align="center"
        // justify="center"
      >
        <Heading variant="h2" mb="4">
          24/7 Customer Support
        </Heading>
        <Text as="div">
          At{" "}
          <Text as="h1" d="inline">
            {" "}
            West End Designs{" "}
          </Text>
          , we don't leave anyone hanging. You are always one call or text away
          from reaching one of us directly. Send us an email and we promise to
          get back to you as soon as humanly possible.
        </Text>

        <BorderedIconOffset m="2rem auto" icon={MdHeadsetMic} />
      </Box>
    </Flex>
  );
};
