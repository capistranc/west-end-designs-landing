import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeParse from "rehype-parse";
import rehypePrism from "@mapbox/rehype-prism";
import path from "path";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";

import { MDXComponents } from "../components/Blog/MDXComponents";

const root = process.cwd();

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "data", type));
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8");

  const { data, content } = matter(source);

  console.log("matter:", typeof content);

  try {
    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkParse],
        // rehypePlugins: [rehypePrism],
        //     require("rehype-slug"),
        //     require("rehype-autolink-headings"),
        //     require("rehype-code-titles")
        //   ],
      },
    });

    console.log("mdxSOURCE:", mdxSource);

    return {
      mdxSource,
      frontMatter: {
        wordCount: content.split(/\s+/gu).length,
        readingTime: readingTime(content),
        slug: slug || null,
        ...data,
      },
    };
  } catch (e) {
    console.log("FAILED TO PARSE MDX: ", e);
  }
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, "data", type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "data", type, postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
