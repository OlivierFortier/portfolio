import Footer from "./Footer/Footer";
import Footer2 from "./Footer/Footer2";
import Header from "./Header/Header";
import Header1 from "./Header/Header1";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50">
      {/* <Header /> */}
      <Header1 />

      <main>{children}</main>

      <Footer2 />
    </div>
  );
}
