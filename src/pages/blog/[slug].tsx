import hydrate from "next-mdx-remote/hydrate";
import { getFiles, getFileBySlug } from "../../lib/mdx";
import BlogLayout from "../../layouts/blogPost";
import { MDXComponents } from "../../components/Blog/MDXComponents";

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticPaths() {
  const posts = await getFiles("blogPosts");

  const paths = posts.map((p) => ({
    params: {
      slug: p.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
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
