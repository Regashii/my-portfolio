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
        <Route path="/my-portfolio" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
