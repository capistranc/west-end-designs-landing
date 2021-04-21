import Head from "next/head";
import Container from "../components/Container";
import { NextPage } from "next";

export const ContactUs: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>ContactUs</title>
      </Head>
      <section>
        <h2>ContactUs</h2>
      </section>
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default ContactUs;
