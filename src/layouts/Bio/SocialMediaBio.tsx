import { Flex, Text, Icon, FlexProps, Box, Button } from "@chakra-ui/react";
import { HoverChildrenImage } from "../../components/Motion/HoverChildrenImage";
import NextLink from "next/link";
// import { BsChatLeftQuote } from "react-icons";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

type SocialMediaLinks = {
  icon: any;
  link: string;
};

type Props = {
  name: string;
  title: string;
  image: string;
  linkData: SocialMediaLinks[];
  bio: string;
} & FlexProps;

export const SocialMediaBio = ({
  name,
  title,
  image,
  bio,
  linkData,
  ...props
}: Props) => {
  function renderSocialMedia(data: SocialMediaLinks[]) {
    return (
      <Flex justify="space-evenly" align="center">
        {data.map(({ icon, link }, i) => {
          return (
            <NextLink key={i} href={link} passHref>
              <Button bg="transparent" color>
                <Icon
                  as={icon}
                  color={props.color}
                  boxSize="2rem"
                  p="1"
                  borderRadius="md"
                />
              </Button>
            </NextLink>
          );
        })}
      </Flex>
    );
  }
  const subText = renderSocialMedia(linkData);

  return (
    <Flex
      zIndex="10"
      position="relative"
      maxWidth="80rem"
      wrap="wrap"
      justify="space-evenly"
      align="center"
      direction={["column", "column", "row", "row"]}
      orient="left"
      {...props}
    >
      <HoverChildrenImage name={name} title={title} image={image}>
        {subText}
      </HoverChildrenImage>
      <Box my="4">
        {/* <Icon
          left="0"
          boxSize="2em"
          top="-1em"
          color="blue.500"
          as={ImQuotesLeft}
          position="absolute"
        /> */}
        <Text maxWidth="36em">{bio}</Text>
      </Box>
    </Flex>
  );
};
