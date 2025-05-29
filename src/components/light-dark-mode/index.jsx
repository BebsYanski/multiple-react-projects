import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./style.css";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);

  return (
    <div className="light-dark-mode section " data-theme={theme}>
      <div className="light-dark-mode-container">
        <p>Hello World</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>{" "}
    </div>
  );
};

export default LightDarkMode;
