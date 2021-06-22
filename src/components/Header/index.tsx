import NavBar from "./NavBar";
import { Flex, Box } from "@chakra-ui/react";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact Us" },
];

const Header = (props) => {
  return (
    <>
      <Flex position="sticky" zIndex="10" top="0" {...props}>
        <NavBar links={links}></NavBar>
      </Flex>
    </>
  );
};

export default Header;
