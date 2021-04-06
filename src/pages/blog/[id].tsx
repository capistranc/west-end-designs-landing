import Container from "../../components/Container";
import { getPostData, getPostsIds } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/Date";

export default function Blog({ postData }) {
  return (
    <Container>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 > {postData.title}</h1>
        <div >
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </Container>
  );
}

export async function getStaticPaths() {
  const paths = getPostsIds();
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return { props: { postData } };
}
