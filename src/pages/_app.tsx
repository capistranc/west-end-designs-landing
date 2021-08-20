import React, { useState, useEffect } from "react";

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
            scroll-behavior: smooth;
            mix-blend-mode: inherit;
          }
          #__next {
            display: flex;
            flex-direction: column;
            height: 100vh;
            width: 100vw;
            background: ${bgColor[colorMode]};
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      let vh = window.innerHeight;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      let vw = window.innerWidth;
      document.documentElement.style.setProperty("--vw", `${vw}px`);
    });
  });

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
