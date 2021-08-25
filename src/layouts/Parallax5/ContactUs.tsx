import {
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Text,
  Button,
  Stack,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  CalendarIcon,
  EmailIcon,
  InfoIcon,
  PhoneIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";

const InlineLabel = ({ label, placeHolder, ...props }) => {
  return (
    <InputGroup {...props}>
      <Box
        display="inline"
        ml="0.5em"
        px="4px"
        position="absolute"
        bg="#1E1E1E"
        zIndex="2"
        fontWeight="bold"
        {...props}
      >
        {label}
      </Box>

      <Input
        borderColor="gray.500"
        variant="outline"
        mt=".75em"
        p="1.25em"
        placeHolder={placeHolder}
        {...props}
      />
    </InputGroup>
  );
};

export const ContactUs = () => {
  return (
    <Flex
      bg="#1E1E1E"
      minHeight="20em"
      width="100vw"
      color="white"
      justify="center"
      align="center"
      direction="column"
      p="12"
    >
      <Flex
        direction="column"
        align="flex-start"
        justify="flex-start"
        minWidth="30em"
      >
        <Stack direction="column" spacing="4">
          <Heading> Get in touch </Heading>

          <InputGroup>
            <Box
              display="inline"
              ml="0.5em"
              px="4px"
              position="absolute"
              bg="#1E1E1E"
              zIndex="2"
              fontWeight="bold"
            >
              Name
            </Box>

            <Input
              borderColor="gray.500"
              variant="outline"
              mt=".75em"
              p="1.25em"
              type="name"
              placeHolder="John Smith"
            />
          </InputGroup>

          <Input type="companyName" placeholder="Business" />

          <InputGroup>
            <Stack direction="column" spacing="-2">
              <Box>
                <Input type="email" placeholder="Email Address" />
              </Box>
            </Stack>
          </InputGroup>
          <InputGroup>
            <Input type="tel" placeholder="Phone number" />
            <InputRightElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />
          </InputGroup>
          <InputGroup>
            <Input type="question" placeholder="What do you need?" />
            <InputRightElement
              pointerEvents="none"
              children={<QuestionOutlineIcon color="gray.300" />}
            />
          </InputGroup>
        </Stack>
      </Flex>
    </Flex>
  );
};
