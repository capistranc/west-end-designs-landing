import React, { useState, useEffect, useRef } from "react";

import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import customTheme from "../theme";
import { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import { Global, css } from "@emotion/react";
import { prismLightTheme, prismDarkTheme } from "../theme/prism";
import { theme } from "../theme";

import "@fontsource/raleway/";
import "@fontsource/oswald/";
import "@fontsource/roboto/";
import "@fontsource/roboto-condensed";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";
import { StickyNavHeader } from "../components/Header";
import { Footer } from "../components/Footer";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const window: any;

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric): void {
  window.gtag("event", name, {
    event_category:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
}
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
            height: 100%;
            width: 100%;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
          }
          #__next {
            height: 100%;
            width: 100%;
            overflow: hidden;

            background: ${theme.bg[colorMode]};
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps, router }: AppProps) => {
  const url = `https://westendwebdesigns.com${router.route}`;
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo
        titleTemplate="%s - West End Designs"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url,
          description:
            "The business website for West End Desgigns, a Web Development Company",
          site_name: "West End Desgisn | westendwebdesigns.com",
          images: [],
        }}
        canonical={url}
      />
      <ChakraProvider resetCSS theme={customTheme}>
        <ColorModeProvider
          options={{ initialColorMode: "light", useSystemColorMode: false }}
        >
          <GlobalStyle>
            <StickyNavHeader />

            <AnimatePresence
              exitBeforeEnter
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Component {...pageProps} canonical={url} key={url} />
            </AnimatePresence>
            <Footer />
          </GlobalStyle>
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
