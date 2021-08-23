import React, { useState, useEffect, useRef } from "react";

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
import { chownSync } from "fs";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    function setViewportHeight() {
      let vh = window.innerHeight;
      let vw = window.innerWidth;

      console.log(window);

      console.log(vh, vw);
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      document.documentElement.style.setProperty("--vw", `${vw}px`);
    }

    window.addEventListener("load", setViewportHeight);
    window.addEventListener("resize", setViewportHeight);
  });

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
          }
          #__next {
            display: flex;
            flex-direction: column;
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
