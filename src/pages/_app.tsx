import React, { useState, useEffect, useRef } from "react";

import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import customTheme from "../theme";
import { AppProps } from "next/app";
import Head from "next/head";
import { Global, css } from "@emotion/react";
import { prismLightTheme, prismDarkTheme } from "../theme/prism";
import { fgColor, bgColor } from "../theme/colors";

import "@fontsource/raleway/";
import "@fontsource/oswald/";
import "@fontsource/roboto/";
import "@fontsource/roboto-condensed";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    function setViewportHeight() {
      let vh = window.innerHeight;
      let vw = window.innerWidth;
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
            height: 100%;
            width: 100%;
          }
          #__next {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;

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
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <ChakraProvider resetCSS theme={customTheme}>
        <ColorModeProvider
          options={{ initialColorMode: "light", useSystemColorMode: true }}
        >
          <GlobalStyle>
            <Component {...pageProps} />
          </GlobalStyle>
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
