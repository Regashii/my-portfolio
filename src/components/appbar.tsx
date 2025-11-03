// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "../styles/AppBar.scss"; // import SCSS file
// export default function AppBar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const routerPage = [
//     {
//       id: 1,
//       name: "Home",
//       path: "/my-portfolio",
//     },
//     {
//       id: 2,
//       name: "Projects",
//       path: "/projects",
//     },
//     {
//       id: 3,
//       name: "About",
//       path: "/about",
//     },
//     {
//       id: 4,
//       name: "Contact",
//       path: "/contact",
//     },
//   ];
//   return (
//     <nav>
//       <header>
//         <h1>Cedrick Abines</h1>
//       </header>

//       <div className="menu-toggle" onClick={() => setMenuOpen((prev) => !prev)}>
//         ☰
//       </div>

//       <ul className={menuOpen ? "active" : ""}>
//         {routerPage.map((page) => (
//           <li key={page.id}>
//             <NavLink
//               to={page.path}
//               className={({ isActive }) => (isActive ? "a active" : "a")}
//             >
//               {page.name}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/AppBar.scss";

export default function AppBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const routerPage = [
    { id: 1, name: "Home", path: "/my-portfolio" },
    { id: 2, name: "Projects", path: "/projects" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "Contact", path: "/contact" },
  ];

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
          {routerPage.map((page) => (
            <li key={page.id}>
              <NavLink
                to={page.path}
                onClick={() => setMenuOpen(false)} // close menu when navigating
                className={({ isActive }) => (isActive ? "a active" : "a")}
              >
                {page.name}
              </NavLink>
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
