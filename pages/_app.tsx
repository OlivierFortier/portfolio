import type { AppProps } from "next/app";

import "../styles/tailwind.css";
import "../styles/utilities.css";

import "../styles/global.css";

import Layout from "../components/layout/Layout";
import { useEffect } from "react";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {

  
  // bouton pour changer le theme sombre ou lumineux
  const [theme, setTheme] = useState("light");

  useEffect(() => {

    if(!localStorage.getItem('theme')) localStorage.setItem("theme", "light");
    
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.backgroundColor = "rgba(17, 24, 39,1)"
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor = "rgba(249, 250, 251, 1)"
    }
  }, [theme]);

  function setDarkTheme() {
    setTheme("dark");
    localStorage.setItem("theme", "dark")
  }

  function setLightTheme() {
    setTheme("light");
    localStorage.setItem("theme", "light")
  }

  return (
    <Layout theme={theme} setDarkTheme={setDarkTheme} setLightTheme={setLightTheme}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
