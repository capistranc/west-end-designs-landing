import Head from "next/head";
import Container from "../components/Container";
import { NextPage } from "next";

export const About: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default About;
