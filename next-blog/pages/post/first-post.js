import Head from "next/head";
import { getPost } from "../../lib/posts";

/**
 * This code only runs on the server
 * @returns props JSON objet
 */
export const getStaticProps = async () => {
  console.log("[firstPostPage] getStaticProps");
  const post = await getPost("first-post");

  return {
    props: {
      post,
    },
  };
};

const firstPostPage = ({ post }) => {
  console.log("[firstPostPage render:", post);
  return (
    <>
      <Head>
        <title>My Blog - {post.title}</title>
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
};

export default firstPostPage;
