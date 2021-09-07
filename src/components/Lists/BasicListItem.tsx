import { Flex, Icon, Heading, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export const BasicListItem = ({ header, subText, ...props }) => {
  return (
    <Flex
      direction="row"
      {...props}
      p="4"
      _hover={{ boxShadow: "0px 2px rgba(255,255,255,0.2)" }}
    >
      <CheckIcon mt="1" mr="2" color="blue.500" />
      <Flex direction="column" align="flex-start">
        <Heading as="h6" size="medium" mb="1">
          {header}
        </Heading>
        <Text textStyle="subText" color="gray.300">
          {subText}
        </Text>
      </Flex>
    </Flex>
  );
};
