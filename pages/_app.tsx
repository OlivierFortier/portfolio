import type { AppProps } from "next/app";

import "../styles/tailwind.css";
import "../styles/utilities.css";

import "../styles/global.css";

import Layout from "../components/layout/Layout";
import { useEffect } from "react";
import { useState } from "react";

/**
 * Thème blanc ou noir
 */
export type Theme = "light" | "dark";

function MyApp({ Component, pageProps }: AppProps) {
  // bouton pour changer le theme sombre ou lumineux
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "light");

    if (localStorage.getItem("theme") === "dark") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, [theme]);

  function setDarkTheme() {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
    document.documentElement.style.backgroundColor = "rgba(17, 24, 39,1)";
  }

  function setLightTheme() {
    setTheme("light");
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
    document.documentElement.style.backgroundColor = "rgba(249, 250, 251, 1)";
  }

  return (
    <Layout
      theme={theme}
      setDarkTheme={setDarkTheme}
      setLightTheme={setLightTheme}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
