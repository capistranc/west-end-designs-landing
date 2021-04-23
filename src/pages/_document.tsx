import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { GoogleFonts } from "next-google-fonts";
import { ColorModeScript } from "@chakra-ui/react";

import * as React from "react";

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
