import Head from "next/head";
import { readFile } from "fs/promises";

export const getStaticProps = async () => {
  console.log("[firstPostPage] getStaticProps");
  const data = await readFile("content/post/first-post.json", "utf8");
  const post = JSON.parse(data);

  return {
    props: {
      post,
    },
  };
};

const firstPostPage = ({ post }) => {
  console.log("[firstPostPage redner:", post);
  return (
    <>
      <Head>
        <title>My Blog - {post.title}</title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
};

export default firstPostPage;
