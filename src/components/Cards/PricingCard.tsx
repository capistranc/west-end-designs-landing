import {
  Flex,
  Box,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Center,
  Image,
  Link,
  List,
  Spacer,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export const PricingCard = ({
  title,
  price,
  unit = "month",
  listData,
  buttonText = "CONTACT NOW",
  ...props
}) => {
  function renderList(listData) {
    return listData.map((data, i) => {
      return (
        <ListItem key={i}>
          <ListIcon as={CheckIcon} color="blue.400" />
          {data}
        </ListItem>
      );
    });
  }

  return (
    <>
      <Box
        className="pricingCard"
        py={6}
        ml={{ md: "2" }}
        mr={{ md: "2" }}
        {...props}
      >
        <Box
          d="block"
          minW="18rem"
          maxW="22rem"
          w={"full"}
          bg={useColorModeValue("white", "teal.800")}
          color={useColorModeValue("gray.800", "white")}
          boxShadow={"dark-lg"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack textAlign={"center"} p={6} align={"center"}>
            <Text
              fontSize={"md"}
              fontWeight={500}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              px={3}
              color={"blue.500"}
              rounded={"full"}
            >
              {title}
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"3xl"}>$</Text>
              <Text fontSize={"6xl"} fontWeight={800}>
                {price}
              </Text>
              <Text color={"gray.500"}>/{unit}</Text>
            </Stack>
          </Stack>

          <Box px={6} py={10}>
            <List spacing={3} align="left">
              {renderList(listData)}
            </List>

            <Button
              mt={10}
              w={"full"}
              bg={"blue.600"}
              color={"white"}
              rounded={"none"}
              // boxShadow={"0 5px 20px 0px rgb(70 130 180 / 43%)"}
              _hover={{
                bg: "blue.700",
              }}
              _focus={{
                bg: "blue.700",
              }}
            >
              <Link href="/contact"> {buttonText}</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
