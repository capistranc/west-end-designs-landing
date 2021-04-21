import Head from "next/head";
import Container from "../../components/Container";
import { NextPage } from "next";

export const Services: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Services</title>
      </Head>
      <section>
        <h2>Services</h2>
      </section>
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Services;
