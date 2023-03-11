import { readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export const getPost = async (slug) => {
  const source = await readFile(`content/post/${slug}.md`, "utf8");
  const {
    data: { date, title },
    content,
  } = matter(source);
  const body = marked(content);
  return {
    title,
    date,
    body,
  };
};
