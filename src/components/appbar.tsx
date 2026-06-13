import { useEffect, useState } from "react";
import "../styles/AppBar.scss";

export default function AppBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

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
      <nav>
        <header>
          <h1>Cedrick Abines</h1>
        </header>

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </div>

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
      </nav>

      {/* Overlay for dim background */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
