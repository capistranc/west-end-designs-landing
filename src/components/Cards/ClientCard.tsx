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
      border="2px solid rgba(255,255,255,0.3)"
      bg="rgba(0, 0, 0, 0.6)"
      borderRadius="16"
      m="4"
      p="4"
      {...props}
    >
      <Heading>{name}</Heading>
      <Text textStyle="subText"> {location}</Text>

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
      <Button alignSelf="center" width="80%">
        Visit
      </Button>
    </Flex>
  );
};
