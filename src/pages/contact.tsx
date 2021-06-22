import Head from "next/head";
import { Layout } from "../layouts/Layout";
import { NextPage } from "next";

export const ContactUs: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>ContactUs</title>
      </Head>
      <section>
        <h2>ContactUs</h2>
      </section>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default ContactUs;
