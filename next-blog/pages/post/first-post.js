import Head from "next/head";

export const getStaticProps = async () => {
  return {
    props: {
      post: {
        title: "First Post",
        body: "Mly fist post, as static props.",
      },
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
