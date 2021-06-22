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
  return (
    <>
      <Box height="300px" top="0" w="100%">
        <Banner h="100%" color="white">
          <Heading as="h1">{title}</Heading>
        </Banner>
      </Box>
      <Box
        position="fixed"
        top="0"
        width="100%"
        zIndex="10"
        sx={{ "backdrop-filter": "blur(20px)" }}
      >
        <NavBar
          links={links}
          mixBlendMode="difference"
          {...props}
          bgColor="transparent"
        ></NavBar>
      </Box>
    </>
  );
};
