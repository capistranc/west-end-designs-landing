import { Flex, Button, Heading, Image, Text } from "@chakra-ui/react";
export const ClientCard = ({
  name,
  location,
  imageSource,
  description,
  ...props
}) => {
  return (
    <Flex
      direction="column"
      align="flex-start"
      justify="space-between"
      border="2px solid rgba(255,255,255,0.3)"
      bg="rgba(0, 0, 0, 0.6)"
      borderRadius="16"
      m="4"
      h="100%"
      p="4"
      alignSelf="stretch"
      {...props}
    >
      <Flex direction="column">
        <Heading>{name}</Heading>
        <Text textStyle="subText"> {location}</Text>
      </Flex>

      <Image
        my="4"
        alignSelf="center"
        src={imageSource}
        minHeight="10em"
        minWidth="12em"
      />
      <Text marginBottom="4em" maxWidth="22rem">
        {description}
      </Text>
      <Button alignSelf="center" justifySelf="flex-end" width="80%">
        Visit
      </Button>
    </Flex>
  );
};
