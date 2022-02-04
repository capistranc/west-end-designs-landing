import { Parallax } from "../components/Wrappers/Parallax";
import { Layout } from "../layouts";
import { useEffect } from "react";
import { Box, useColorMode, Text, useBreakpointValue } from "@chakra-ui/react";

import { Intro } from "../layouts/Home/Intro";
import { Prices } from "../layouts/Service/Prices";
import { SixTiles } from "../layouts/Service/SixTiles";
import { Roadmap } from "../layouts/Service/Roadmap";
import { Services2 } from "../layouts/Service/SimpleList";
import { Landing } from "../layouts/Home/Landing";
import { SunOverlay } from "../components/Motion/SunOverlay";
import { ContactForm } from "../components/Forms/ContactForm";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { GiSmartphone } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { ImStack } from "react-icons/im";
import { VscGraph } from "react-icons/vsc";
import { BiBookContent } from "react-icons/bi";
import { theme } from "../theme";
export const serviceData = [
  {
    title: "Web Applications",
    icon: HiOutlineDesktopComputer,
    text: `First impressions are important. We all know this. If you have a professionaly made website your customers will be confident in your business.`,
    link: "/contact",
  },
  {
    title: "Mobile Designs",
    icon: GiSmartphone,
    text: "Whether you are using the latest iPhone or an old flip phone, our websites load fast. Our statically rendered website designs guarantee this.",
    link: "/contact",
  },
  {
    title: "Full Stack Solutions",
    icon: ImStack,
    text: "If you have an existing codebase or business problem that could use a technology upgrade, contact us for a consult and we can develop an application for you.",
    link: "/contact",
  },
  {
    title: "Development",
    icon: FaLaptopCode,
    text: "Have peace of mind knowing that experts are building your website, so that you don't have to. Our websites are made to run flawlesly on mobile devices, tablets, and PC.",
    link: "/contact",
  },
  {
    title: "Content Management",
    icon: BiBookContent,
    text: "Figuring out how to explain your business can be hard, and with us you don't have too. Our inhouse team of SEO Copywriters will write all the content for you.",
    link: "/contact",
  },
  {
    title: "Search Engine Optimization",
    icon: VscGraph,
    text: "More views means more customers. We will make sure your website reaches more eyes by utilizing the power of Google Analytics and modern SEO strategies.",
    link: "/contact",
  },
];
const introData = {
  titleBegin: "Welcome to ",
  titleEnd: "West End Designs",
  text: (
    <>
      Getting online is easy. Succeeding online is a different story. Search
      Engine Optimization, Google Analytics, Server-Side Rendering... At{" "}
      <Text as="h1" d="inline-block">
        {" "}
        West End Designs
      </Text>{" "}
      we use every tool available to guarantee your success. We are so confident
      in our designs, that your first mockup for a standard website is free of
      charge.
    </>
  ),
  buttonText: "CONNECT NOW",
  buttonLink: "/contact",
};

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
      <Box position="relative" as="main" mt="-3.5rem" zIndex="1">
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
        <Intro {...introData} />
        <SixTiles data={serviceData} />
        <Roadmap />

        <Prices />

        <Services2 />

        <Box
          position="relative"
          mt="10rem"
          pt="4rem"
          color={theme.fg[colorMode]}
          bg={theme.bg[colorMode]}
          align="center"
          borderBottom="2px dashed"
          borderColor={theme.bg2[colorMode]}
        >
          <ContactForm position="relative" zIndex="5" />
        </Box>
      </Box>
    </Layout>
  );
}
