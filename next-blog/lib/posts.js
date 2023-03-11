import { readFile } from "fs/promises";
import { marked } from "marked";

export const getPost = async (slug) => {
  const source = await readFile(`content/post/${slug}.md`, "utf8");
  const html = marked(source);
  return {
    body: html,
  };
};
