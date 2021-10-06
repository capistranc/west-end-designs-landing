import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { GoogleFonts } from "next-google-fonts";
import { ColorModeScript } from "@chakra-ui/react";
import React, { useEffect } from "react";
const { GTAG_ID } = process.env;
export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
          />
          <script
            async
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GTAG_ID}', {
                            page_path: window.location.pathname,
                        });
                        `,
            }}
          />
        </Head>

        <body>
          <Main />
          <ColorModeScript />
          <NextScript />
        </body>
      </Html>
    );
  }
}
