import Head from "next/head";
function HomePage() {
  console.log("HomePage");
  return (
    <>
      <Head>
        <title>Mly Blog</title>
        <meta name="description" value="This is my blog" />
      </Head>
      <main>
        <h1>HomePage</h1>
      </main>
    </>
  );
}

export default HomePage;
