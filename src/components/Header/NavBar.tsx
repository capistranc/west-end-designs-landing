import React, { useState, useEffect } from "react";
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
  const [device, setDevice] = useState("desktop");

  const deviceType = useBreakpointValue({ base: "mobile", md: "desktop" });
  useEffect(() => {
    setDevice(deviceType);
  });

  function renderLinks() {
    if (device === "desktop") {
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
      justify={variant == "noLogo" && !isOpen ? "flex-end" : "space-between"}
    >
      {variant != "noLogo" && <Logo />}

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

export const MenuLinks = ({
  links,
  isOpen,
  toggle = () => {},
  active = null,
  ...props
}) => {
  const MenuItem = ({ children, to = "/", ...props }) => {
    return (
      <NextLink href={to} passHref>
        <Button as="a" variant="ghost" onClick={toggle} {...props}>
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
        display={{ base: "block", md: "block" }}
        // flexBasis={{ base: "100%", md: "100%" }}
        align="center"
      >
        <Flex
          w="100%"
          direction={["column", "column", "row", "row"]}
          align="center"
          justify={[
            "center",
            "space-between",
            "space-between",
            "space-between",
          ]}
        >
          <Stack
            maxHeight="80vh"
            align="center"
            justify={[
              "center",
              "space-between",
              "space-between",
              "space-between",
            ]}
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
            <DarkModeSwitch toggle={toggle} />
          </Stack>
        </Flex>
      </Box>
    </>
  );
};
