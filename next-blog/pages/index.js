import Head from "next/head";
import Link from "next/link";
function HomePage() {
  console.log("HomePage");
  return (
    <>
      <Head>
        <title>Mly Blog</title>
      </Head>
      <main>
        <h1>HomePage</h1>
        <ul>
          <il>
            <Link href="post/first-post">First Page</Link>
          </il>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
