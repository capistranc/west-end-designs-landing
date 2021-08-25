import {
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react";
import {
  CalendarIcon,
  EmailIcon,
  InfoIcon,
  PhoneIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";

export const ContactUs = () => {
  return (
    <Flex
      bg="#1E1E1E"
      minHeight="20em"
      width="100%"
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
            <InputLeftElement
              pointerEvents="none"
              children={<InfoIcon color="gray.300" />}
            />
            <Input type="name" placeholder="Your Name" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<CalendarIcon color="gray.300" />}
            />
            <Input type="companyName" placeholder="Business" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
            <Input type="email" placeholder="Email Address" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />
            <Input type="tel" placeholder="Phone number" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<QuestionOutlineIcon color="gray.300" />}
            />
            <Input type="question" placeholder="What do you need?" />
          </InputGroup>
        </Stack>
      </Flex>
    </Flex>
  );
};
