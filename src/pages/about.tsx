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

import { SubHeaderWList } from "../layouts/Intros/SubHeaderWList";

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
    "linear-gradient(30deg, rgba(25, 25, 50,0.3), rgba(25, 25, 80,0.8)), url(/images/about.jpeg)"
  );

  const bioData = [
    {
      name: "Chris Capistran",
      title: "Co-Founder",
      bio: `Chris Capistran is the Lead Developer and Co-founder of West End Designs.
      He is passionate about Mathematics and Philosophy, originally graduating from UCLA with a degree in Mathematics and Computer Science.
      Engineering came to Chris naturally, as he would later pivot into the field of Software post-graduation. After working as a full stack engineer
      at several tech companies large and small, he decided to develop a speciality in Front-End development and SEO Optimization in order to serve members
      of his local business community.`,
      image: "/images/chris.png",
      linkData: [
        {
          icon: FaGithub,
          link: "https://github.com/capistranc/",
        },
        {
          icon: FaLinkedin,
          link: "https://www.linkedin.com/in/capistranc/",
        },
        {
          icon: FaInstagram,
          link: "https://www.instagram.com/hit_mon_cap/",
        },
        {
          icon: FaCode,
          link: "https://chriscapistran.info",
        },
      ],
    },
    {
      name: "Michael Esfahani",
      title: "Co-Founder",
      bio: `Michael Esfahani is a Developer and Co-founder of West End Designs.
      Michael's deep passion for technology and innovation led him into career in software development. 
      Michael has experience working in Client Services, which included work in software implementation. 
      He has also worked in Web Design and Web Development. Before entering a career path in software, Michael held a career in Marine Biology.`,
      image: "/images/michael.jpeg",
      linkData: [
        {
          icon: FaGithub,
          link: "https://github.com/esfahanimichael",
        },
        {
          icon: FaLinkedin,
          link: "https://www.linkedin.com/in/esfahanimichael/",
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
          mx="1"
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
          <DashedLine position="absolute" bottom="-6rem" />
        </Flex>

        <Box
          color={theme.fg[colorMode]}
          bg={theme.bg[colorMode]}
          mt="6rem"
          position="relative"
          align="center"
        >
          <DashedLine />
          <DashedLine />
          <Box position="relative" pb="12rem" align="center">
            <SubHeaderWList />
            <DiamondDecoratorBottomUp bg={theme.bg3[colorMode]} />
            <DashedLine />
            <DashedLine />

            <Button position="relative" zIndex="10" variant="btow">
              FREE CONSULT
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
            pt="18rem"
          >
            <DiagonalDecoratorTopLeft bg={theme.bg3[colorMode]} />
            <DiagonalDecoratorTopRight bg={theme.bg3[colorMode]} />
            <DiagonalDecoratorBottomRight bg={theme.bg2[colorMode]} />
            <SocialMediaBio {...bioData[0]} color={theme.fg2[colorMode]} />
          </Box>

          <Box
            bg={theme.bg[colorMode]}
            color={theme.fg[colorMode]}
            position="relative"
            pt="12rem"
            maxWidth="80rem"
            pb="4rem"
          >
            <DiagonalDecoratorTopRight bg={theme.bg2[colorMode]} top="-6rem" />
            <SocialMediaBio
              direction={["column", "column", "row-reverse", "row-reverse"]}
              color={theme.fg[colorMode]}
              {...bioData[1]}
            />
          </Box>
        </Box>
      </Layout>
    </>
  );
};
export default About;
