import { NavBar } from "../components/NavBar";

/**
 * It needs to export default component
 * @param {Componet and pageProps} param0
 * @returns
 */
const App = ({ Component, pageProps }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default App;
