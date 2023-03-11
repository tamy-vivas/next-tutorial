import Head from "next/head";
import { NavBar } from "../components/NavBar";
import "../styles/globals.css";

/**
 * It needs to export default component
 * @param {Componet and pageProps} param0
 * @returns
 */
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default App;
