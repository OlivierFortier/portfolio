import type { AppProps } from "next/app";

import "../styles/tailwind.css";
import "../styles/utilities.css";

import "../styles/global.css";

import Layout from "../components/layout/Layout";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
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
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
