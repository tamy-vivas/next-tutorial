import Head from "next/head";
import { getPost, getSlugs } from "../../lib/posts";

/**
 * needed by Next to define dinamic routes
 * @returns dinamic router paths
 */
export const getStaticPaths = async () => {
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    // paths: [
    //   { params: { slug: "first-post" } },
    //   { params: { slug: "second-post" } },
    // ],
    fallback: false,
  };
};

/**
 * This code only runs on the server
 * @returns props JSON objet
 */
export const getStaticProps = async ({ params: { slug } }) => {
  console.log("[firstPostPage] getStaticProps");
  const post = await getPost(slug);

  return {
    props: {
      post,
    },
  };
};

const PostPage = ({ post }) => {
  console.log("[PostPage render:", post);
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

export default PostPage;
