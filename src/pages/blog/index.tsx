import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout"
import Date from "../../components/Date";
import { getSortedPostsData } from "../../lib/posts";
import NextLink from "next/link";

export default function Blog({ allPostsData }) {
  const renderPostsData = () => {
    return allPostsData.map(({ id, date, title }) => {
      return (
        <li key={id}>
          <NextLink href={`/blog/${id}`}>{title}</NextLink>
          <br />
          <small>
            <Date dateString={date} />
          </small>
        </li>
      );
    });
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2 >Blog</h2>
        <ul >{renderPostsData()}</ul>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
