import Head from "next/head";
import { Layout } from "../layouts/Layout";
import { NextPage } from "next";
import { ContactForm } from "../components/Forms/ContactForm";

export const ContactPage: NextPage = () => {
  return (
    <Layout>
      <Head> Contact Us Page</Head>
      <ContactForm />
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default ContactPage;
