import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  useEffect(() => {
    document.querySelector("html").style.backgroundColor =
      "rgba(249, 250, 251, 1)";
  }, []);

  return (
    <div className="bg-gray-50">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}