import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/AppBar.scss"; // import SCSS file
export default function AppBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const routerPage = [
    {
      id: 1,
      name: "Home",
      path: "/my-portfolio/",
    },
    {
      id: 2,
      name: "Projects",
      path: "/my-portfolio/projects",
    },
    {
      id: 3,
      name: "About",
      path: "/my-portfolio/about",
    },
    {
      id: 4,
      name: "Contact",
      path: "/my-portfolio/contact",
    },
  ];
  return (
    <nav>
      <header>
        <h1>Cedrick Abines</h1>
      </header>

      <div className="menu-toggle" onClick={() => setMenuOpen((prev) => !prev)}>
        ☰
      </div>

      <ul className={menuOpen ? "active" : ""}>
        {routerPage.map((page) => (
          <li key={page.id}>
            <NavLink
              to={page.path}
              className={({ isActive }) => (isActive ? "a active" : "a")}
            >
              {" "}
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
