import fs from "fs";
import path from "path";
import matter from "gray-matter";

import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "data/blogPosts");

export function getPostsIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return { params: { id: fileName.replace(/\.md$/, "") } };
  });
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const postsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return postsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id) {
  const filePath = path.join(postsDirectory, `${id}.md`);
  const fileData = fs.readFileSync(filePath, "utf-8");

  const matterResult = matter(fileData);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return { id, contentHtml, ...matterResult.data };
}
