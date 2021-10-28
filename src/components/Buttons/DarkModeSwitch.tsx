import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { theme } from "../../theme";

export const DarkModeSwitch = ({ toggle, ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  function handleClick() {
    toggle();
    toggleColorMode();
  }

  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={handleClick}
      bg="transparent"
      {...props}
      color={theme.fg[colorMode]}
    />
  );
};
