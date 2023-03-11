import Head from "next/head";
import Link from "next/link";
function HomePage() {
  console.log("HomePage");
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>HomePage</h1>
        <ul>
          <li>
            <Link href="post/first-post">First Page</Link>
          </li>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
