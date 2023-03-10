import { useState } from "react";
import DarkTheme from "./DarkTheme";

const loadDarkMode = () => {
  if (typeof localStorage === "undefined") {
    return false;
  }
  const value = localStorage.getItem("darkMode");
  return value === null ? false : JSON.parse(value);
};

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(loadDarkMode);
  const handelClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  const text = darkMode ? "Light Mode" : "Dark Mode";
  //suppressHydrationWarning, is needed because at the begining the component is render with false
  // but after that loadDarkMode change the state, so Next tries to hydrate the component dark with a button
  // with discrepancy
  return (
    <>
      <button onClick={handelClick} suppressHydrationWarning>
        {text}
      </button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          cursor: pointer;
          color: inherit;
        }
      `}</style>

      {darkMode && <DarkTheme />}
    </>
  );
};

export default ThemeSwitch;
