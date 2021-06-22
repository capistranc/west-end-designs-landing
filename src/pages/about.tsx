import Head from "next/head";
import { Layout } from "../layouts/Layout";
import { NextPage } from "next";
import { AirbnbExample } from "../components/cards/adCard";

export const About: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>

      {AirbnbExample()}
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default About;
