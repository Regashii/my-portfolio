import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import homeImage from "../assets/homeimage-rbg.png";
import "../styles/home.scss";
import AboutMe from "./about";
import AppBar from "./appbar";
import Projects from "./projects";

export default function Home() {
  return (
    <>
      <AppBar />
      <main className="home" id="home">
        <section className="image-section">
          <img src={homeImage} alt="home-image" />
          <div className="image-contact">
            <div className="info-item">
              <Mail /> <span>cedrickabines15@gmail.com</span>
            </div>
            <div className="info-item">
              <Phone /> <span>+63 964 995 8624</span>
            </div>
          </div>
        </section>

        <section className="intro">
          <header>
            <h1 className="first-name">
              HELLO, IT'S <span>CED</span>
            </h1>
            <h2>
              I'am a <span>Computer Engineer</span>
            </h2>

            <p>
              Passionate Computer Engineering graduate with hands-on experience
              in web development, embedded systems, and networking. Skilled in
              creating responsive web applications using HTML, CSS, JavaScript,
              and MERN stack, and experienced in circuit design and hardware
              troubleshooting. Eager to apply technical knowledge and creativity
              to real-world projects while continuously learning and improving.
            </p>
          </header>
          <div className="buttons">
            <aside className="contact-info">
              <div className="social-links">
                <a
                  href="https://www.facebook.com/Jced1510"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.instagram.com/jhncd10/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/john-cedrick-abines-384325378/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/Regashii"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github />
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <AboutMe />
      </div>
    </>
  );
}
