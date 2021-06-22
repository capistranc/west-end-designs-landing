import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { fgColor, bgColor } from "../styles/colors";

export const DarkModeSwitch = ({ ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      // bgColor={bgColor[colorMode]}
      bg="transparent"
      color={fgColor[colorMode]}
      {...props}
    />
  );
};
