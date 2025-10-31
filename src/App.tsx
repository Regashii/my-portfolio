import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/about.tsx";
import AppBar from "./components/appbar";
import Contact from "./components/contact.tsx";
import Home from "./components/home";
import NotFound from "./components/notfound.tsx";
import Projects from "./components/projects.tsx";

function App() {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/my-portfolio/" element={<Home />} />
        <Route path="/my-portfolio/projects" element={<Projects />} />
        <Route path="/my-portfolio/about" element={<AboutMe />} />
        <Route path="/my-portfolio/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
