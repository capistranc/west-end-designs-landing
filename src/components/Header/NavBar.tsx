import React from "react";
import NextLink from "next/link";
import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  useColorMode,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Collapse } from "@chakra-ui/react";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import { Logo } from "../Logo";
import { DarkModeSwitch } from "../Buttons/DarkModeSwitch";

import { fgColor, bgColor } from "../../theme/colors";

export const NavBar = ({ links, ...props }) => {
  // const { colorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  const variant = useBreakpointValue({ base: "hamburger", md: "standard" });

  function renderLinks() {
    if (variant === "standard") {
      return <MenuLinks links={links} isOpen={isOpen} {...props} />;
    } else {
      return (
        <>
          <MenuToggle toggle={onToggle} isOpen={isOpen} {...props} />

          <Box display="block" flexBasis="100%">
            <Collapse in={isOpen} animateOpacity>
              <MenuLinks links={links} isOpen={isOpen} {...props} />
            </Collapse>
          </Box>
        </>
      );
    }
  }

  return (
    <NavBarContainer {...props}>
      <Logo />
      {renderLinks()}
    </NavBarContainer>
  );
};

export const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p="2"
      {...props}
    >
      {children}
    </Flex>
  );
};

export const MenuToggle = ({ toggle, isOpen, ...props }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon w={6} h={6} />}
    </Box>
  );
};

export const MenuLinks = ({ links, isOpen, ...props }) => {
  const MenuItem = ({ children, to = "/", ...props }) => {
    return (
      <NextLink href={to} passHref>
        <Button as="a" variant="ghost" {...props}>
          <Text display="block">{children}</Text>
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
          maxHeight="80vh"
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          spacing="4"
          pt={[4, 4, 0, 0]}
          wrap="wrap"
        >
          {links.map((link) => {
            return (
              <MenuItem key={link.label} to={link.path} {...props}>
                {link.label}
              </MenuItem>
            );
          })}

          <DarkModeSwitch {...props} />
        </Stack>
      </Box>
    </>
  );
};
