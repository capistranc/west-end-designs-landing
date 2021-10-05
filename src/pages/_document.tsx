import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { GoogleFonts } from "next-google-fonts";
import { ColorModeScript } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { TagManager } from "react-gtm-module";

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head></Head>

        <body>
          <Main />
          <ColorModeScript />
          <NextScript />
        </body>
      </Html>
    );
  }
}
