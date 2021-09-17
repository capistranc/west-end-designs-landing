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
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export const section9 = () => {
  return (
    <>
      <Center py={6} ml={{ md: "2" }} mr={{ md: "2" }}>
        <Box
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"dark-lg"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack
            textAlign={"center"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"center"}
          >
            <Text
              fontSize={"sm"}
              fontWeight={500}
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              px={3}
              color={"blue.500"}
              rounded={"full"}
            >
              PREMIUM PLUS+
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"3xl"} color={"gray.900"}>
                $
              </Text>
              <Text fontSize={"6xl"} fontWeight={800} color={"gray.900"}>
                300
              </Text>
              <Text color={"gray.500"}>/month</Text>
            </Stack>
          </Stack>

          <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color="blue.400" />
                5.000 page views
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="blue.400" />
                50 automation executions
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="blue.400" />
                50 identified users
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="blue.400" />
                All features
              </ListItem>
            </List>

            <Button
              mt={10}
              w={"full"}
              bg={"blue.400"}
              color={"white"}
              rounded={"xl"}
              boxShadow={"0 5px 20px 0px rgb(70 130 180 / 43%)"}
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              <Link href="/contact"> Send us an inquiry</Link>
            </Button>
          </Box>
        </Box>
      </Center>
    </>
  );
};
