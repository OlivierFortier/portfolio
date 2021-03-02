import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="relative">{children}</main>

      <Footer />
    </div>
  );
}
