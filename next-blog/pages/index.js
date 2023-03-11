import Link from "next/link";
import { NavBar } from "../components/NavBar";

function HomePage() {
  console.log("HomePage");
  return (
    <>
      <header>
        <NavBar />
        <main>
          <h1>HomePage</h1>
        </main>
      </header>
    </>
  );
}

export default HomePage;
