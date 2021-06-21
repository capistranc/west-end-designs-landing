import Head from "next/head";
import Container from "../../components/Container";
import Date from "../../components/Date";
import { getSortedPostsData } from "../../lib/blog";
import NextLink from "next/link";
import { NextPage } from "next";
import {
  Box,
  Heading,
  Link,
  Stack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";

export const Portfolio: NextPage = () => {
  const bgImageLight =
    "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.30)) , url('/images/catalina.jpg')";
  const bgImageDark =
    "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) , url('/images/catalina.jpg')";

  const bgImage = useColorModeValue(bgImageLight, bgImageDark);
  return (
    <Container>
      <Head>
        <title>Portfolio</title>
      </Head>
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Portfolio;
