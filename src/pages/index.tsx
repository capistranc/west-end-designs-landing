import Head from "next/head";
import { Layout } from "../layouts/Layout";
import { Date } from "../components/Date";
import { getSortedPostsData } from "../lib/blog";
import NextLink from "next/link";

export default function Index({ allPostsData }) {
  return (
    <Layout title="Home">
      <Head>
        <title>West End Designs</title>
      </Head>
      <div className="firstModule">WOWOWOWOOW</div>

      <h2>Whatsas going on</h2>
      <p>
        (This is a sample website - you’ll be building a site like this on{" "}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>

      <style jsx>{`
            
            div {
              display:block;
            }

            .firstModule {              
              background-image: url("/images/catalinaLight.jpg");
              min-width: 100%;
              min-height: 300px;
              background-size: contain;
              background-repeat: no-repeat;
              background-attachment: fixed;
              background-position: center;

            }



        

        // @media (max-width: 600px) {
        //   .grid {
        //     width: 100%;
        //     flex-direction: column;
        //   }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
        }
      `}</style>
    </Layout>
  );
}
