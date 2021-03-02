import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, theme, setDarkTheme, setLightTheme }) {

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="relative">{children}</main>

      <Footer theme={theme} setDarkTheme={setDarkTheme} setLightTheme={setLightTheme} />
    </div>
  );
}
