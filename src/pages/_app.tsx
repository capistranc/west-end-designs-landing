import React from "react";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import customTheme from "../theme";
import { AppProps } from "next/app";
import { Global, css } from "@emotion/react";
import { prismLightTheme, prismDarkTheme } from "../theme/prism";
import { fgColor, bgColor } from "../theme/colors";

import "@fontsource/raleway/400.css";
import "@fontsource/oswald/400.css";
import "@fontsource/roboto/400.css";

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
            mix-blend-mode: inherit;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            mix-blend-mode: inherit;
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
