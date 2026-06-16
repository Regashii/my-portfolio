import { useEffect, useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import "../styles/appbar.scss";

export default function AppBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = [
    { id: 1, name: "Home", sectionId: "home" },
    { id: 2, name: "Projects", sectionId: "projects" },
    { id: 3, name: "About", sectionId: "about" },
  ];

  const scrollToSection = (sectionId: string) => {
    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <>
      <nav className="appbar">
        <header>
          <h1>Cedrick Abines</h1>
        </header>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <Menu />
        </button>

        <ul className={menuOpen ? "active" : ""}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className="nav-link"
                onClick={() => scrollToSection(link.sectionId)}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="theme-toggle"
          type="button"
          onClick={() =>
            setTheme((currentTheme) =>
              currentTheme === "dark" ? "light" : "dark",
            )
          }
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>
      </nav>

      {/* Overlay for dim background */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
