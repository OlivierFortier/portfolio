import Footer from "./Footer/Footer";
import Footer2 from "./Footer/Footer2";
import Header from "./Header/Header";

export default function Layout({children}) {
  return (
    <div>
      <Header />

      <main>{children}</main>

      <Footer2/>
      
    </div>
  );
}
