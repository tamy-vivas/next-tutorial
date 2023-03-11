import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/posts";

/**
 * This code only runs on the server
 * @returns props JSON objet
 */
export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
};

function HomePage({ posts }) {
  //console.log("HomePage");
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>HomePage</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
