import {
  seminar1,
  seminar2,
  seminar3,
  seminar4,
  seminar5,
} from "../components/exportimage.tsx";

import { useEffect, useState } from "react";
import sensors from "../assets/sensors.png";
import soldering from "../assets/soldering.jpg";
import "../styles/about.scss";

export default function AboutMe() {
  const [seminarIndex, setSeminarIndex] = useState(0);
  const [langIndex, setLangIndex] = useState(0);
  const [frameworkIndex, setFrameworkIndex] = useState(0);
  const [embeddedIndex, setEmbeddedIndex] = useState(0);
  const [hardwareIndex, setHardwareIndex] = useState(0);

  // Auto-rotate languages
  useEffect(() => {
    const interval = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate frameworks
  useEffect(() => {
    const interval = setInterval(() => {
      setFrameworkIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate embedded systems
  useEffect(() => {
    const interval = setInterval(() => {
      setEmbeddedIndex((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate hardware
  useEffect(() => {
    const interval = setInterval(() => {
      setHardwareIndex((prev) => (prev + 1) % 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const languages = [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "C++",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "C#",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
  ];

  const frameworks = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Dart",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
  ];

  const embeddedSystems = [
    {
      name: "Arduino",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    },
    {
      name: "Raspberry Pi",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
    },
    {
      name: "Proteus",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/5a/Proteus_Design_Suite_Atom_Logo.png",
    },
    {
      name: "KiCad",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/KiCad-Logo.svg",
    },
    {
      name: "Tinkercad",
      logo: "https://www.mechabau.com/wp-content/uploads/Tinkercad-logo.png",
    },
  ];

  const hardware = [
    { name: "Soldering", logo: soldering },
    { name: "Sensors", logo: sensors },
  ];

  const seminars = [
    {
      title:
        " Embedding Amiability, Elevating Inclusivity, and Eliminating Uncertainties",
      description:
        "Explored innovations in the Internet of Things (IoT) and robotics, focusing on designing inclusive and adaptive automation systems using sensors and microcontrollers.",
      date: "October 2021",
      organizer: "CCS",
      seminarImage: seminar1,
    },
    {
      title: "An Overview of Digital Threats and Best Practices",
      description:
        "Gained foundational knowledge of cybersecurity concepts, data privacy, and best practices to prevent common online threats and vulnerabilities.",
      date: "November 2021",
      organizer: "CCS",
      seminarImage: seminar2,
    },
    {
      title: "Going Online and Beyond: An Introduction to Cloud Computing",
      description:
        "Learned how cloud technologies enable scalable, remote computing — including the basics of cloud storage, deployment, and virtual machines.",
      date: "November 2021",
      organizer: "CCS",
      seminarImage: seminar3,
    },
    {
      title: "Basic Web Development",
      description:
        "Developed a basic understanding of HTML, CSS, and JavaScript for creating responsive and interactive websites from scratch.",
      date: "March 2024",
      organizer: "DICT",
      seminarImage: seminar4,
    },
    {
      title:
        " Cybersecurity 101: Implementing Basic Cybersecurity Measures For Your Organization",
      description:
        "Learned about artificial intelligence integrations and machine learning in modern software and robotics.",
      date: "March 2024",
      organizer: "The ABBA Initiative",
      seminarImage: seminar5,
    },
  ];

  const nextSeminar = () =>
    setSeminarIndex((prev) => (prev + 1) % seminars.length);
  const prevSeminar = () =>
    setSeminarIndex((prev) => (prev === 0 ? seminars.length - 1 : prev - 1));

  return (
    <main className="aboutmain">
      <header>About Me & Skills</header>

      {/* Skills Ovals Section */}
      <section className="skills-ovals-container">
        {/* Languages Oval */}
        <div className="skill-oval">
          <h3>Programming Languages</h3>
          <p>Core languages for building robust and efficient applications</p>
          <div className="oval-carousel">
            <img
              src={languages[langIndex].logo}
              alt={languages[langIndex].name}
            />
            <span className="icon-name">{languages[langIndex].name}</span>
            <button
              className="rotate-btn"
              onClick={() =>
                setLangIndex((prev) => (prev + 1) % languages.length)
              }
            >
              ↻
            </button>
          </div>
        </div>

        {/* Frameworks Oval */}
        <div className="skill-oval">
          <h3>Web & Mobile</h3>
          <p>Modern frameworks for responsive and interactive applications</p>
          <div className="oval-carousel">
            <img
              src={frameworks[frameworkIndex].logo}
              alt={frameworks[frameworkIndex].name}
            />
            <span className="icon-name">{frameworks[frameworkIndex].name}</span>
            <button
              className="rotate-btn"
              onClick={() =>
                setFrameworkIndex((prev) => (prev + 1) % frameworks.length)
              }
            >
              ↻
            </button>
          </div>
        </div>

        {/* Embedded Systems Oval */}
        <div className="skill-oval">
          <h3>Embedded Systems</h3>
          <p>Tools and platforms for IoT and hardware development</p>
          <div className="oval-carousel">
            <img
              src={embeddedSystems[embeddedIndex].logo}
              alt={embeddedSystems[embeddedIndex].name}
            />
            <span className="icon-name">
              {embeddedSystems[embeddedIndex].name}
            </span>
            <button
              className="rotate-btn"
              onClick={() =>
                setEmbeddedIndex((prev) => (prev + 1) % embeddedSystems.length)
              }
            >
              ↻
            </button>
          </div>
        </div>

        {/* Hardware & Tools Oval */}
        <div className="skill-oval">
          <h3>Hardware & Tools</h3>
          <p>Practical skills in electronics and hardware assembly</p>
          <div className="oval-carousel">
            <img
              src={hardware[hardwareIndex].logo}
              alt={hardware[hardwareIndex].name}
            />
            <span className="icon-name">{hardware[hardwareIndex].name}</span>
            <button
              className="rotate-btn"
              onClick={() =>
                setHardwareIndex((prev) => (prev + 1) % hardware.length)
              }
            >
              ↻
            </button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="info-card education">
        <h2>Education</h2>
        <div className="underline"></div>
        <div className="education-card">
          <h3>Bachelor of Science in Computer Engineering</h3>
          <p>Pampanga State University — 2021–2025</p>
        </div>
        <div className="education-card">
          <h3>Senior High School (ABM Strand)</h3>
          <p>St. Vincent's Academy — 2019–2021</p>
        </div>
      </section>

      {/* Seminars Section */}
      <section className="info-card seminar">
        <h2>Seminars</h2>
        <div className="underline"></div>
        <div className="seminar-card">
          <img src={seminars[seminarIndex].seminarImage} />
          <h3>{seminars[seminarIndex].title}</h3>
          <p className="seminar-desc">{seminars[seminarIndex].description}</p>
          <p className="seminar-meta">
            <strong>Date:</strong> {seminars[seminarIndex].date} <br />
            <strong>Organizer:</strong> {seminars[seminarIndex].organizer}
          </p>
          <div className="seminar-buttons">
            <button onClick={prevSeminar}>Previous</button>
            <button onClick={nextSeminar}>Next</button>
          </div>
        </div>
      </section>
    </main>
  );
}
