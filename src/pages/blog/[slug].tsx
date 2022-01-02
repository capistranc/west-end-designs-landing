import { MDXRemote } from "next-mdx-remote";
import { getFiles, getFileBySlug } from "../../lib/mdx";
import BlogLayout from "../../layouts/blogPost";
import { MDXComponents } from "../../components/Blog/MDXComponents";

export default function Blog({ mdxSource, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />;
    </BlogLayout>
  );
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
