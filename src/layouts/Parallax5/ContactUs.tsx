import {
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Link,
  Spacer,
  Textarea,
  Stack,
  FormLabel,
  FormControl,
  Grid,
  Box,
  GridItem,
  useToast,
  FormErrorMessage,
  toast,
} from "@chakra-ui/react";

const ContactInfo = () => (
  <Box>
    <Logo />
    <Link href="mailto:capistranc@gmail.com">WestEndDesigns@gmail.com</Link>
    <Spacer />
    <Link href="tel:714-932-9998">(949) 735 - 5619</Link>
  </Box>
);

import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { Logo } from "../../components";

export default function AlertPop(props) {
  return (
    <Alert h="2em" status="error">
      <AlertIcon />
      <AlertTitle mr={2}>{props.title}</AlertTitle>
    </Alert>
  );
}

import {
  EmailIcon,
  PhoneIcon,
  QuestionIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";
import { InLineLabel } from "../../components/Input";
import { useForm } from "react-hook-form";
import React from "react";

export const ContactUs = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [resize, setResize] = React.useState("vertical");

  const toast = useToast();
  const onSubmit = (data) => {
    console.log(data);
    toast({
      title: "Submitted!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        bg={"#1E1E1E"}
        minHeight="100vh"
        minWidth="100vw"
        width="100%"
        height="100%"
        color="white"
        justify="center"
        align="center"
        direction="column"
        p="12"
      >
        <Flex
          h="100%"
          w="100%"
          justify="space-evenly"
          align="center"
          direction={["column", "row", "row", "row"]}
          mb="4em"
        >
          <Heading>Get in touch today!</Heading>

          <ContactInfo />
        </Flex>
        <Flex
          direction="column"
          h="100%"
          w="100%"
          align="center"
          justify="center"
        >
          <Stack w="100%" direction={["column", "column", "row", "row"]}>
            <FormControl isInvalid={errors.name}>
              <InLineLabel> Name </InLineLabel>
              <Input
                borderColor="gray.500"
                variant="outline"
                p="1.25em"
                id="name"
                placeholder="Jackie Chan"
                {...register("name")}
              />
              <Box h="2em">
                <FormErrorMessage d="inline">
                  {errors.name && <AlertPop title={errors.name.message} />}
                </FormErrorMessage>
              </Box>
            </FormControl>

            <FormControl isInvalid={errors.company}>
              <InLineLabel>Company</InLineLabel>
              <Input
                borderColor="gray.500"
                variant="outline"
                p="1.25em"
                id="name"
                placeholder="West End Designs"
                {...register("company")}
              />
              <Box h="2em">
                <FormErrorMessage d="inline">
                  {errors.company && (
                    <AlertPop title={errors.company.message} />
                  )}
                </FormErrorMessage>
              </Box>
            </FormControl>
          </Stack>

          <Stack
            w="100%"
            justify="space-between"
            align="space-between"
            direction={["column", "column", "row", "row"]}
          >
            <FormControl isInvalid={errors.email}>
              <InLineLabel>Email</InLineLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="gray.300" />}
                />
                <Input
                  id="email"
                  borderColor="gray.500"
                  placeholder="foobar@gmail.com"
                  {...register("email", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
              </InputGroup>
              <Box h="2em">
                <FormErrorMessage display="inline">
                  {errors.email && (
                    <AlertPop height="100%" title={errors.email.message} />
                  )}
                </FormErrorMessage>
              </Box>
            </FormControl>

            <FormControl isInvalid={errors.phone}>
              <InLineLabel>Phone</InLineLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input
                  borderColor="gray.500"
                  id="phone"
                  placeholder="+1 (949) 555 - 6192"
                  {...register("phone", {
                    minLength: {
                      value: 9,
                      message: "Minimum length should be 9",
                    },
                  })}
                />
              </InputGroup>
              <Box h="2em">
                <FormErrorMessage d="inline">
                  {errors.phone && errors.phone.message}
                </FormErrorMessage>
              </Box>
            </FormControl>
          </Stack>

          <Flex w="100%" height="100%" flex="1">
            <FormControl isInvalid={errors.question} h="100%">
              <InLineLabel>
                <QuestionIcon mx="1" />
                Message
              </InLineLabel>

              <Textarea
                p="4"
                borderColor="gray.500"
                flex="1"
                height="100%"
                minHeight="12rem"
                type="question"
                resize={resize}
                placeholder="What do you need?"
                {...register("question", {
                  required: `This field is required`,
                  minLength: {
                    value: 9,
                    message: "Minimum length should be 30",
                  },
                })}
              />

              <Box h="2em">
                <FormErrorMessage d="inline">
                  {errors.question && (
                    <AlertPop
                      display="inline"
                      title={errors.question.message}
                    />
                  )}
                </FormErrorMessage>
              </Box>
            </FormControl>
          </Flex>

          <Button type="submit" width="60%" variant="solid">
            SEND
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
