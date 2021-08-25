import Head from "next/head";
import { Layout } from "../layouts/Layout";
import { NextPage } from "next";
import { ContactUs } from "../layouts/Parallax5/ContactUs";

export const ContactPage: NextPage = () => {
  return (
    <Layout>
      <Head> Contact Us Page</Head>
      <ContactUs />
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default ContactPage;
