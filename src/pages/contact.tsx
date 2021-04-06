import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import Date from "../components/Date";
import { getSortedPostsData } from "../lib/posts";
import NextLink from "next/link";
import { NextPage, } from "next";

export const ContactPage: NextPage =  () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2 >Contact us</h2>
        <p>
          (949) 735 - 5619
        </p>
      </section>
    </Layout>
  );
}