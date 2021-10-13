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
  Text,
  useToast,
  HTMLChakraProps,
  FormErrorMessage,
  useColorMode,
} from "@chakra-ui/react";
import { theme } from "../../theme";
import emailJS from "emailjs-com";

const ContactInfo = (props) => (
  <Box {...props}>
    <Logo />
    <Link href="mailto:contact@westendwebdesigns.com">
      contact@WestEndWebDesigns.com
    </Link>
    <Spacer />
    <Link href="tel:714-932-9998">(949) 735 - 5619</Link>
  </Box>
);

import { Logo } from "..";

import { EmailIcon, PhoneIcon, QuestionIcon } from "@chakra-ui/icons";
import { InLineLabel } from "../Input";
import { useForm } from "react-hook-form";
import React from "react";
import { AlertPop } from "../Popups/AlertPop";

emailJS.init(process.env.EmailJS_ID);

export const ContactForm = (props: HTMLChakraProps<"form">) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [isSending, setSending] = React.useState(false);

  const toast = useToast();
  const onSubmit = async (data) => {
    setSending(true);
    try {
      const result = await emailJS.send(
        "contact_service",
        "contact_form",
        data,
      );

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
    } catch (e) {
      toast({
        title: `Failed to send: ${e.status}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    setSending(false);
  };

  const { colorMode } = useColorMode();

  return (
    <chakra.form
      onSubmit={handleSubmit(onSubmit)}
      id="contact-form"
      display="block"
      color={theme.fg[colorMode]}
      bg={theme.bg4[colorMode]}
      boxShadow="0 0 29px 0 rgb(0 0 0 / 9%)"
      border={"4px dashedArray 12,5"}
      borderColor={theme.fg[colorMode]}
      borderRadius="4px"
      p="4"
      m="4"
      maxWidth="36rem"
      {...props}
    >
      <Box align="center" margin="0 auto" p="4">
        <Heading variant="h2" fontSize="4xl" textAlign="left" mb="2rem">
          <Text d="inline" color={theme.heading[colorMode]}>
            Drop
          </Text>{" "}
          us a line
        </Heading>

        <Stack direction={["column", "row", "row", "row"]}>
          <FormControl isInvalid={errors.name}>
            <InLineLabel bg={props.bg || props.bgColor}> Name </InLineLabel>
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
                {errors.company && <AlertPop title={errors.company.message} />}
              </FormErrorMessage>
            </Box>
          </FormControl>
        </Stack>

        <Stack direction={["column", "row", "row", "row"]}>
          <FormControl isInvalid={errors.email}>
            <InLineLabel bg={props.bg}>Email</InLineLabel>
            <InputGroup>
              <InputLeftElement>
                <EmailIcon color="gray.300" />
              </InputLeftElement>
              <Input
                id="email"
                type="email"
                borderColor="gray.500"
                placeholder="foobar@gmail.com"
                {...register("email", {
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
              <InputLeftElement>
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
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

        <FormControl isInvalid={errors.question} isRequired>
          <InLineLabel bg={props.bg}>
            <QuestionIcon mx="1" />
            Message
          </InLineLabel>

          <Textarea
            p="4"
            borderColor="gray.500"
            minHeight="12rem"
            type="question"
            overflowY="scroll"
            placeholder={`Hey man, so next week I was thinking you should come up to my house in Bodega and we can go running. And we can have some fun together, running. And maybe something more, but maybe just running.`}
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
                <AlertPop display="inline" title={errors.question.message} />
              )}
            </FormErrorMessage>
          </Box>
        </FormControl>

        <Button
          type="submit"
          width="60%"
          variant="solid"
          borderRadius="0"
          isLoading={isSubmitting}
          loadingText="Sending..."
        >
          Send
        </Button>
      </Box>
    </chakra.form>
  );
};
