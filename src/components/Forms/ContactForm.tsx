import {
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  chakra,
  Button,
  Link,
  Spacer,
  Textarea,
  Stack,
  FormControl,
  Box,
  useToast,
  HTMLChakraProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import emailJS from "emailjs-com";

const ContactInfo = (props) => (
  <Box {...props}>
    <Logo />
    <Link href="mailto:westendwebdesigns@gmail.com">
      WestEndWebDesigns@gmail.com
    </Link>
    <Spacer />
    <Link href="tel:714-932-9998">(949) 735 - 5619</Link>
  </Box>
);

import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import { Logo } from "..";

export default function AlertPop(props: HTMLChakraProps<"div">) {
  return (
    <Alert h="1em" status="error" zIndex="3">
      <AlertIcon />
      <AlertTitle mr={2}>{props.title}</AlertTitle>
    </Alert>
  );
}

import { EmailIcon, PhoneIcon, QuestionIcon } from "@chakra-ui/icons";
import { InLineLabel } from "../Input";
import { useForm } from "react-hook-form";
import React from "react";

emailJS.init(process.env.EmailJS_ID);

export const ContactForm = (props: HTMLChakraProps<"form">) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  // const [resize, setResize] = React.useState("vertical");

  const [isSending, setSending] = React.useState(false);

  const toast = useToast();
  const onSubmit = async (data) => {
    setSending(true);
    const result = await emailJS.send("contact_service", "contact_form", data);

    if (result.status === 200) {
      toast({
        title: "Sent!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: `Failed to send: ${result.text}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    setSending(false);
  };

  return (
    <chakra.form
      onSubmit={handleSubmit(onSubmit)}
      id="contact-form"
      d="flex"
      alignItems="center"
      justifyContent="center"
      bg={"#1E1E1E"}
      color="white"
      {...props}
    >
      <Flex
        maxWidth="64rem"
        width="100%"
        height="100%"
        justify="center"
        align="center"
        direction="column"
        p="4"
      >
        <Flex
          h="100%"
          w="100%"
          justify="space-evenly"
          align="center"
          direction={["column", "column", "row", "row"]}
          mb="4em"
        >
          <Heading p="8">Get in touch today!</Heading>

          <ContactInfo p="8" />
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
              <InLineLabel bg={props.bg}> Name </InLineLabel>
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
              <InLineLabel bg={props.bg}>Company</InLineLabel>
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
            <FormControl isInvalid={errors.email} isRequired>
              <InLineLabel bg={props.bg}>Email</InLineLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="gray.300" />}
                />
                <Input
                  id="email"
                  type="email"
                  borderColor="gray.500"
                  placeholder="foobar@gmail.com"
                  {...register("email", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                    pattern: {
                      message:
                        "Email must be formatted properly: ie JohnSnow@gmail.com",
                      value:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
              <InLineLabel bg={props.bg}>Phone</InLineLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input
                  borderColor="gray.500"
                  id="phone"
                  type="tel"
                  placeholder="+1 (949) 555 - 6192"
                  {...register("phone", {
                    minLength: {
                      value: 9,
                      message: "Phone Number should be at least 9 digits",
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
            <FormControl isInvalid={errors.question} h="100%" isRequired>
              <InLineLabel bg={props.bg}>
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
                overflowY="scroll"
                placeholder={`I want to do the cha cha, come with me and let us do the cha cha. Maybe after we can do something else, maybe not, who knows! But for sure let's make time to do the cha cha, you and I. I think it will be a lot of fun.`}
                {...register("question", {
                  required: `This field is required`,
                  minLength: {
                    value: 30,
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

          <Button
            type="submit"
            width="60%"
            variant="solid"
            isLoading={isSending}
            loadingText="Sending..."
          >
            Send
          </Button>
        </Flex>
      </Flex>
    </chakra.form>
  );
};
