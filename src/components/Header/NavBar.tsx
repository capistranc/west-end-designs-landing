import React from "react";
import NextLink from "next/link";
import { Link, Box, Flex, Text, Stack, Button } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

import Logo from "../Logo";
import DarkModeSwitch from "../DarkModeSwitch";

function NavBar({ links, ...props }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} {...props} />
      <MenuLinks links={links} isOpen={isOpen} {...props} />
    </NavBarContainer>
  );
}

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon w={6} h={6} />}
    </Box>
  );
};

function MenuLinks({ links, isOpen, ...props }) {
  const MenuItem = ({ children, to = "/", ...props }) => {
    return (
      <NextLink href={to} passHref>
        <Button as="a" variant="ghost">
          <Text display="block" {...props}>
            {children}
          </Text>
        </Button>
      </NextLink>
    );
  };

  return (
    <>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          {links.map((link) => {
            return (
              <MenuItem to={link.path} {...props}>
                {link.label}
              </MenuItem>
            );
          })}

          <DarkModeSwitch />
        </Stack>
      </Box>
    </>
  );
}

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
