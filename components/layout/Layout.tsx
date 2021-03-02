import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {

  return (
    <div className="bg-gray-50">
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
