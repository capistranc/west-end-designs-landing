import { NavBar } from "./NavBar";
import Head from "next/head";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { BlurryBackground } from "../BlurryBackground";
import { useColorModeValue } from "@chakra-ui/react";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact Us" },
];

const Banner = ({ children, ...props }) => {
  const bgImageLight =
    "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.30)), url('/images/catalinaLight.jpg')";
  const bgImageDark =
    "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.61)) , url('/images/catalinaDark.jpg')";
  const bgImage = useColorModeValue(bgImageLight, bgImageDark);

  return (
    <BlurryBackground bgImage={bgImage}>
      <Flex justify="center" align="center" {...props} color="white">
        {children}
      </Flex>
    </BlurryBackground>
  );
};
export const Header = ({ title, ...props }) => {
  const navbarLight = "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.30))";
  const navbarDark = "linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.61))";
  const navBarBG = useColorModeValue(navbarLight, navbarDark);

  return (
    <>
      <Box position="sticky" top="0" zIndex="10">
        <BlurryBackground bgImage={navBarBG}>
          <NavBar links={links}></NavBar>
        </BlurryBackground>
      </Box>
      <Banner h="350px">
        <Heading as="h1">
          <Text as="h1"> {title}</Text>
        </Heading>
      </Banner>
    </>
  );
};
