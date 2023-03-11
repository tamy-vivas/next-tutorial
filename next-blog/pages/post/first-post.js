import Head from "next/head";

const firstPost = () => {
  return (
    <>
      <Head>
        <title>My Blog - First Post</title>
      </Head>
      <main>
        <h1>FirstPage</h1>
        <p>This is my first ever blog post!</p>
      </main>
    </>
  );
};

export default firstPost;
