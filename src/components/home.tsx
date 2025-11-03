import { useState } from "react";
import homeImage from "../assets/homeimage-rbg.png";
import resumePDF from "../assets/Resume - John Cedrick Abines.pdf"; // your actual PDF file
import "../styles/home.scss";

export default function Home() {
  const [showResume, setShowResume] = useState(false);

  const handleOpenResume = () => setShowResume(true);
  const handleCloseResume = () => setShowResume(false);

  return (
    <>
      <main className="home">
        <section className="image-section">
          <img src={homeImage} alt="home-image" />
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
            <button className="resume-btn" onClick={handleOpenResume}>
              Resume
            </button>
          </div>
        </section>
      </main>

      {showResume && (
        <div className="modal-overlay" onClick={handleCloseResume}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button className="close-btn" onClick={handleCloseResume}>
              ✕
            </button>
            <h2>My Resume</h2>
            <iframe
              src={resumePDF + "#toolbar=0"}
              title="Resume PDF"
              className="resume-preview"
              frameBorder="0"
            ></iframe>
            <a
              href={resumePDF}
              download="Abines_Resume.pdf"
              className="download-btn"
            >
              Download PDF
            </a>
          </div>
        </div>
      )}
    </>
  );
}
