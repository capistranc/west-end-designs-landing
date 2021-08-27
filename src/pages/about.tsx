import Head from "next/head";
import { Layout } from "../layouts/Layout";
import { NextPage } from "next";
import styled from "@emotion/styled";
import { Flex } from "@chakra-ui/react";

const StickyButton = styled(Flex)`
  position: sticky;
  right: 0;
  z-index: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: height 0.5s, line-height 0.5s;
  align-self: flex-end;
  bottom: 0;
`;

export const About: NextPage = () => {
  return (
    <Layout>
      <StickyButton sx={{}}></StickyButton>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default About;
