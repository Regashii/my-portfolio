import {
  seminar1,
  seminar2,
  seminar3,
  seminar4,
  seminar5,
} from "../components/exportimage.tsx";

import { useState } from "react";
import sensors from "../assets/sensors.png";
import soldering from "../assets/soldering.jpg";
import "../styles/about.scss";

export default function AboutMe() {
  const [seminarIndex, setSeminarIndex] = useState(0);

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

  const coding = [
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      bg: "#306998",
    },
    {
      name: "C++",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      bg: "#00599C",
    },
    {
      name: "C#",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      bg: "#68217A",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      bg: "#F0DB4F",
    },
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      bg: "#E34C26",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      bg: "#264DE4",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      bg: "#61DBFB",
    },
    {
      name: "Dart",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      bg: "#0175C2",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      bg: "#f89820",
    },
  ];

  const embedded = [
    {
      name: "Arduino",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
      bg: "#00979D",
    },
    {
      name: "Raspberry Pi",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
      bg: "#C31A2F",
    },
    {
      name: "Proteus",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/5a/Proteus_Design_Suite_Atom_Logo.png",
      bg: "#1E90FF",
    },
    {
      name: "KiCad",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/KiCad-Logo.svg",
      bg: "#E94E1B",
    },
    {
      name: "Tinkercad",
      logo: "https://www.mechabau.com/wp-content/uploads/Tinkercad-logo.png",
      bg: "#FF6F00",
    },
    { name: "Soldering", logo: soldering, bg: "#DAA520" },
    { name: "Sensors", logo: sensors, bg: "#228B22" },
  ];

  const nextSeminar = () =>
    setSeminarIndex((prev) => (prev + 1) % seminars.length);
  const prevSeminar = () =>
    setSeminarIndex((prev) => (prev === 0 ? seminars.length - 1 : prev - 1));

  return (
    <main className="aboutmain">
      <header>About Me & Skills</header>

      {/* Programming Section */}
      <section className="info-card">
        <h2>Programming</h2>
        <div className="underline"></div>
        <p>
          Skilled in multiple programming languages and frameworks for web,
          mobile, and automation projects. Continuously learning to integrate
          creative and efficient solutions.
        </p>
        <div className="skills-grid">
          {coding.map((lang) => (
            <div
              className="skill-item"
              key={lang.name}
              style={{
                background: `linear-gradient(135deg, ${lang.bg}88, #111)`,
              }}
            >
              <img src={lang.logo} alt={lang.name} />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Systems Section */}
      <section className="info-card">
        <h2>Embedded Systems & Electronics</h2>
        <div className="underline"></div>
        <p>
          Experienced in building and testing embedded systems, circuit design,
          and hardware interfacing for automation and robotics projects.
        </p>
        <div className="skills-grid">
          {embedded.map((tool) => (
            <div
              className="skill-item"
              key={tool.name}
              style={{
                background: `linear-gradient(135deg, ${tool.bg}aa, #111)`,
              }}
            >
              <img src={tool.logo} alt={tool.name} />
              <span>{tool.name}</span>
            </div>
          ))}
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
