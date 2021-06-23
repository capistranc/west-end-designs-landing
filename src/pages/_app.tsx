import React from "react";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import customTheme from "../styles/theme";
import { AppProps } from "next/app";
import { Global, css } from "@emotion/react";
import { prismLightTheme, prismDarkTheme } from "../styles/prism";
import { fgColor, bgColor } from "../styles/colors";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            height: 100%
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${bgColor[colorMode]};
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{ initialColorMode: "light", useSystemColorMode: true }}
      >
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default App;
