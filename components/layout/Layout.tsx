import Scene3D from "../3D/Scene3D";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({
  children,
  theme,
  setDarkTheme,
  setLightTheme,
}) {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900">
      <Scene3D />

      <Header />

      <main className="relative">{children}</main>

      <Footer
        theme={theme}
        setDarkTheme={setDarkTheme}
        setLightTheme={setLightTheme}
      />
    </div>
  );
}
