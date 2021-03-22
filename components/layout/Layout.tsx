import Scene3D from "../3D/Scene3D";
import Footer from "./Footer";
import Header from "./Header";

// composant qui est commun à toutes les pages du site. Il entoure l'application
export default function Layout({ children, theme, setDarkTheme, setLightTheme }) {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900">
      <Scene3D theme={theme} />
      <Header /> <main className="relative h-full">{children}</main>
      <Footer
        theme={theme}
        setDarkTheme={setDarkTheme}
        setLightTheme={setLightTheme}
      />
    </div>
  );
}
