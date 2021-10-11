import { Parallax } from "../components/Wrappers/Parallax";
import { Layout } from "../layouts";
import { useEffect } from "react";
import {
  Box,
  Flex,
  Stack,
  Link,
  useColorMode,
  Icon,
  useMediaQuery,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Intro } from "../layouts/Home/Intro";
import { Prices } from "../layouts/Home/Prices";
import { SixTiles } from "../layouts/Home/SixTiles";
import { Roadmap } from "../layouts/Home/Roadmap";
import { Services2 } from "../layouts/Home/Services2";
import { Landing } from "../layouts/Home/Landing";
import { SunOverlay } from "../components/Motion/SunOverlay";
import { ContactForm } from "../components/Forms/ContactForm";
import { theme } from "../theme";

export default function Index() {
  let mobileHeight = 0;

  useEffect(() => {
    mobileHeight =
      window.outerHeight > mobileHeight ? window.outerHeight : mobileHeight;
  });

  const device = useBreakpointValue({
    base: "mobile",
    md: "browser",
    xl: "hq",
  });

  const { colorMode } = useColorMode();

  let bgImages = [`url('/images/${device || "mobile"}/cliffEdge.jpeg')`];

  return (
    <Layout
      title="Welcome to West End Designs: A Web Development Company"
      description="Welcome to West End Designs: A Web Development company specializing in Mobile First web designs, SEO Optimization, and Full Stack Applications. Our websites are coded from scratch leveraging modern frameworks to statically render each web site. Contact us to have your website built today."
    >
      <Box position="relative" as="main" zIndex="1">
        <Parallax
          bgImage={bgImages[0]}
          height={{
            base: mobileHeight > 0 ? mobileHeight : "120vh",
            md: "120vh",
          }}
          backgroundPosition={{ base: "-80px 0", md: "center" }}
          backgroundSize={{ base: "130vh 110vh", md: "cover" }}
        >
          <SunOverlay />
          <Landing />
        </Parallax>
        <Intro />
        <SixTiles />
        <Roadmap />

        <Prices />

        <Services2 />

        <Box
          position="relative"
          mt="10rem"
          color={theme.fg[colorMode]}
          bg={theme.bg[colorMode]}
          align="center"
        >
          <ContactForm position="relative" zIndex="5" />
        </Box>

        <Box position="relative"></Box>
      </Box>
    </Layout>
  );
}
