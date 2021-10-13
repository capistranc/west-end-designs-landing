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
import { theme } from "../../theme";
import { Collapse } from "@chakra-ui/react";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import { Logo } from "../Logo";
import { DarkModeSwitch } from "../Buttons/DarkModeSwitch";

export const NavBar = ({
  links,
  active = null,
  variant = "default",
  ...props
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();

  const deviceType = useBreakpointValue({ base: "mobile", md: "desktop" });

  function renderLinks() {
    if (deviceType === "desktop") {
      return (
        <MenuLinks links={links} active={active} isOpen={isOpen} {...props} />
      );
    } else {
      return (
        <>
          <MenuToggle toggle={onToggle} isOpen={isOpen} {...props} />

          <Box
            display="block"
            flexBasis="100%"
            background={theme.bg[colorMode]}
            color={theme.fg[colorMode]}
          >
            <Collapse in={isOpen} animateOpacity>
              <MenuLinks
                links={links}
                isOpen={isOpen}
                active={active}
                {...props}
              />
            </Collapse>
          </Box>
        </>
      );
    }
  }

  return (
    <Flex
      as="nav"
      align="center"
      wrap="wrap"
      w="100%"
      p="2"
      background={isOpen && theme.bg[colorMode]}
      color={isOpen && theme.fg[colorMode]}
      justify={variant == "noLogo" && !isOpen ? "right" : "space-between"}
    >
      {variant != "noLogo" && <Logo />}
      {isOpen && variant == "noLogo" && <Logo />}

      {renderLinks()}
    </Flex>
  );
};

export const MenuToggle = ({ toggle, isOpen, ...props }: any) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon w={6} h={6} />}
    </Box>
  );
};

export const MenuLinks = ({ links, isOpen, active = null, ...props }) => {
  const MenuItem = ({ children, to = "/", ...props }) => {
    return (
      <NextLink href={to} passHref>
        <Button as="a" variant="ghost" {...props}>
          <Text
            display="block"
            borderBottom={to === active && "1px solid"}
            // borderColor={theme.fg[colorMode]}
          >
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
