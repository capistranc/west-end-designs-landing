import Head from "next/head";
import Container from "../components/Container";
import { NextPage } from "next";
import { AirbnbExample } from "../components/cards/adCard";

export const About: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>

      {AirbnbExample()}
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default About;
