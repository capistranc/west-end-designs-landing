import Head from "next/head";
import Container from "../../components/Container";
import { NextPage } from "next";
import SubscribeForm from "../../components/SubscribeForm";
import { Flex } from "@chakra-ui/react";
export const Services: NextPage = () => {
  return (
    <Container>
      <Flex w="100%" maxWidth="1100">
        <Head>
          <title>Services</title>
        </Head>
        <section>
          <SubscribeForm />
          <h2>Services</h2>
        </section>
      </Flex>
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Services;
