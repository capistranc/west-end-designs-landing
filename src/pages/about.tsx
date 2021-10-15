import { Layout } from "../layouts/Layout";
import { NextPage } from "next";
import { ContactForm } from "../components/Forms/ContactForm";
import { BannerSectionAbout } from "../layouts/About/bannersectionabout";
import { theme } from "../theme";

import React, { useRef, useEffect, useState } from "react";

import {
  Flex,
  Box,
  Text,
  Stack,
  Center,
  List,
  ListIcon,
  ListItem,
  Link,
  SimpleGrid,
  Image,
  Icon,
  Heading,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  DiagonalDecoratorBottomLeftMinus,
  DiagonalDecoratorTopLeft,
  DiagonalDecoratorTopRight,
  DiamondDecoratorBottomDown,
  DiamondDecoratorBottomUp,
  DiagonalDecoratorBottomRight,
  DiamondDecoratorTopDown,
} from "../components/Decorators";
import { DashedLine } from "../components/svg/DashedLine";
import { CheckCircleIcon, CheckIcon } from "@chakra-ui/icons";
import { serviceData } from ".";
import { GiSodaCan } from "react-icons/gi";

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { ThreeStats } from "../layouts/About/3Stats";
import { SocialMediaBio } from "../layouts/Bio/SocialMediaBio";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaCode,
  FaInstagram,
} from "react-icons/fa";

const statsData = [
  {
    unit: "applications built",
    value: "20",
    icon: HiOutlineDesktopComputer,
    duration: 5000,
  },
  {
    unit: "lines of code",
    value: "10000",
    icon: FaCode,
    duration: 2000,
  },
  {
    unit: "cans of red bull",
    value: "78",
    icon: GiSodaCan,
    duration: 3000,
    variant: "continue",
  },
];
const About: NextPage = ({}) => {
  const { colorMode } = useColorMode();
  const banner = useColorModeValue(
    "url(/images/about.jpeg)",
    "linear-gradient(30deg, rgba(25, 25, 50,0.3), rgba(25, 25, 80,0.8)), url(/images/about.jpeg)",
  );

  const bioData = [
    {
      name: "Chris Capistran",
      title: "Co-Founder/Lead Developer",
      bio: `Chris Capistran We focus on search engine optimization. It's one of the
      least understood and least transparent aspects of great marketing, and
      we see that as an opportunity. We're excited to simplify SEO for
      everyone through our software, education, and community.`,
      image: "/images/chris.png",
      linkData: [
        {
          icon: FaGithub,
          link: "#",
        },
        {
          icon: FaLinkedin,
          link: "#",
        },
        {
          icon: FaInstagram,
          link: "#",
        },
        {
          icon: FaCode,
          link: "#",
        },
      ],
    },
    {
      name: "Michael Esfahani",
      title: "Co-Founder/Developer",
      bio: `Michael Esfahani We focus on search engine optimization. It's one of the
      least understood and least transparent aspects of great marketing, and
      we see that as an opportunity. We're excited to simplify SEO for
      everyone through our software, education, and community.`,
      image: "/images/michael.jpeg",
      linkData: [
        {
          icon: FaGithub,
          link: "#",
        },
        {
          icon: FaLinkedin,
          link: "#",
        },
        {
          icon: FaInstagram,
          link: "#",
        },
        {
          icon: FaCode,
          link: "#",
        },
      ],
    },
  ];

  return (
    <>
      <Layout
        title="Hey! nice to meet you"
        description="Chris and Mike started West End Designs to help small and medium sized businesses compete in todays modern world of rapidly advancing technology."
      >
        <Flex
          position="relative"
          className="header-sentinel"
          mt="-3.5rem"
          direction="column"
          bg={banner}
          bgPosition="50% 60%"
          align="center"
          justify="center"
          minHeight="50vh"
          color={theme.fg2[colorMode]}
        >
          <Heading variant="h2" fontSize="5xl">
            About Us
          </Heading>
          <Text fontSize="md">West End Designs</Text>

          <DiamondDecoratorBottomDown
            bg={theme.bg[colorMode]}
            bottom="-12rem"
          />
          <DashedLine position="absolute" bottom="-5rem" />
        </Flex>

        <Box
          color={theme.fg[colorMode]}
          bg={theme.bg[colorMode]}
          mt="5rem"
          position="relative"
          align="center"
        >
          <DashedLine />
          <DashedLine />
          <Box position="relative" pb="10rem" align="center">
            <Box maxWidth="50em">
              <Heading variant="h2" as="div" display="inline">
                <Text d="inline" color={theme.heading2[colorMode]}>
                  Why{" "}
                </Text>
                we do what we do
              </Heading>
              <Text fontWeight="bold" color={theme.heading2[colorMode]}>
                - Our mission -
              </Text>
              <Text position="relative" margin="auto" mt="1em" as="div">
                After years of working for large companies in the tech industry,
                we decided that we could use all that we have learned to help
                local businesses around the world compete in the world of
                technology. With the goal of working as we travel and traveling
                as we work, we aim to bring the style of the{" "}
                <Link color={theme.heading[colorMode]} fontWeight="600">
                  West End
                </Link>{" "}
                every where we go.
              </Text>

              <Box maxWidth="32em" my="1em" align="cener">
                <Text>Our skillsets include but are not limited to:</Text>
                <Flex justify="center">
                  <List align="left" spacing="2" mt="1em">
                    <SimpleGrid
                      columns={[1, 2, 2, 2]}
                      spacing="2"
                      alignItems="center"
                    >
                      {serviceData.map(({ title }) => {
                        return (
                          <ListItem>
                            <ListIcon
                              as={CheckIcon}
                              color={theme.icon[colorMode]}
                            />
                            {title}
                          </ListItem>
                        );
                      })}
                    </SimpleGrid>
                  </List>
                </Flex>
              </Box>
            </Box>

            <DiamondDecoratorBottomUp bg={theme.bg3[colorMode]} />
            <DashedLine />
            <DashedLine />

            <Button position="relative" zIndex="10" variant="bb">
              Free Consultation
            </Button>
          </Box>
          <Box
            bg={theme.bg3[colorMode]}
            color={theme.fg2[colorMode]}
            position="relative"
            zIndex="10"
          >
            <ThreeStats bg={theme.bg3[colorMode]} statsData={statsData} p="4" />
          </Box>

          <Box
            bg={theme.bg2[colorMode]}
            color={theme.fg2[colorMode]}
            position="relative"
            pt="15rem"
          >
            <DiagonalDecoratorTopLeft bg={theme.bg3[colorMode]} />
            <DiagonalDecoratorTopRight bg={theme.bg3[colorMode]} />
            <DiagonalDecoratorBottomRight bg={theme.bg2[colorMode]} />
            <SocialMediaBio {...bioData[0]} />
          </Box>

          <Box
            bg={theme.bg[colorMode]}
            color={theme.fg[colorMode]}
            position="relative"
            pt="10rem"
            maxWidth="80rem"
          >
            <SocialMediaBio
              direction={["column", "column", "row-reverse", "row-reverse"]}
              {...bioData[1]}
            />
          </Box>
        </Box>
      </Layout>
    </>
  );
};
export default About;
