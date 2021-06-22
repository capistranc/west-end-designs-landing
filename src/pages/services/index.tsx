import Head from "next/head";
import { Layout } from "../../layouts/Layout";
import { NextPage } from "next";
// import SubscribeForm from "../../components/Footer/SubscribeForm";
import { Flex } from "@chakra-ui/react";
export const Services: NextPage = () => {
  return (
    <Layout>
      <Flex w="100%" maxWidth="1100">
        <Head>
          <title>Services</title>
        </Head>
        <section>
          {/* <SubscribeForm /> */}
          <h2>Services</h2>
        </section>
      </Flex>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Services;
