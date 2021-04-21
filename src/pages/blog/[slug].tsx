import hydrate from "next-mdx-remote/hydrate";
import { getFiles, getFileBySlug } from "../../lib/mdx";
import BlogLayout from "../../layouts/blog";
import MDXComponents from "../../components/MDXComponents";

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });
  console.log("reached BLOGLAYOUT");
  console.log(content);
  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticPaths() {
  console.log("GET STATIC PATHS");
  const posts = await getFiles("blogPosts");
  console.log(posts);

  const paths = posts.map((p) => ({
    params: {
      slug: p.replace(/\.mdx/, ""),
    },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log("GET STATIC PROPS");
  const post = await getFileBySlug("blogPosts", params.slug);

  return { props: post };
}

// import Container from "../../components/Container";
// import { getPostData, getPostsIds } from "../../lib/blog";
// import Head from "next/head";
// import Date from "../../components/Date";

// export default function Blog({ postData }) {
//   return (
//     <Container>
//       <Head>
//         <title>{postData.title}</title>
//       </Head>
//       <article>
//         <h1 > {postData.title}</h1>
//         <div >
//           <Date dateString={postData.date} />
//         </div>
//         <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//       </article>
//       </Container>
//   );
// }

// export async function getStaticPaths() {
//   const paths = getPostsIds();
//   return { paths, fallback: false };
// }
// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id);
//   return { props: { postData } };
// }
