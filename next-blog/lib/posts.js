import { readFile } from "fs/promises";

export const getPost = async (slug) => {
  const data = await readFile(`content/post/${slug}.json`, "utf8");
  return JSON.parse(data);
};
