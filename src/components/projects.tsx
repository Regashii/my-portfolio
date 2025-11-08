import { useState } from "react";
import {
  cisco1,
  cisco10,
  cisco2,
  cisco3,
  cisco4,
  cisco5,
  cisco6,
  cisco7,
  cisco8,
  cisco9,
  ecommerce1,
  ecommerce2,
  ecommerce3,
  ecommerce4,
  ecommerce5,
  ecommerce6,
  ecommerce7,
  ecommerce8,
  game1,
  game2,
  game3,
  home1,
  home2,
  home3,
  home4,
  home5,
  home6,
  mobile1,
  mobile2,
  mobile3,
  speed1,
  speed2,
  thesis1,
} from "../components/exportimage.tsx";
import "../styles/projects.scss";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(1);

  const projectsContent = [
    {
      id: 1,
      title: "Baked Goodies Web Application",
      description:
        "For our academic project, our team developed an e-commerce web application for a client who wanted to sell custom cakes online. Using the MERN stack (MongoDB, Express, React, Node.js), we built a platform that allows customers to customize their cake orders, set deadlines, and make online payments, while the client can manage and track orders through a secure dashboard. As a co-lead developer, I was responsible for creating the client-side interface, including the login system, dashboard, and order management features. Throughout the project, we implemented key functionalities such as authentication tokens, cookies, email notifications, image storage, and real-time updates, gaining valuable hands-on experience in building a complete and functional web application.",
      images: [
        ecommerce1,
        ecommerce2,
        ecommerce3,
        ecommerce4,
        ecommerce5,
        ecommerce6,
        ecommerce7,
        ecommerce8,
      ],
      linktosite: "https://client-side-bakegoodies.vercel.app/",
    },
    {
      id: 2,
      title:
        "Robotic Arm for Waste Collection in Hard to Maintain Area (Thesis)",
      description:
        "Our team developed a prototype designed to collect waste in locations that are difficult to access manually. I was responsible for creating and designing the mobile application used to control the robot, testing components, and designing the schematic and PCB layout. I also trained a YOLO model for object detection, configured the Raspberry Pi 5, and implemented MQTT communication between the prototype and the mobile app with Firebase integration for real-time data storage and updates. This project strengthened my skills in IoT integration, embedded systems, and intelligent automation.",
      images: [thesis1, mobile1, mobile2, mobile3],
    },
    {
      id: 3,
      title: "Automatic Speed Fan",
      description:
        "For this project, we designed and built an Automatic Speed Fan system that adjusts the fan’s speed based on the surrounding temperature. Using a temperature sensor, the system continuously monitors the environment and automatically increases or decreases the fan speed to maintain a comfortable temperature level. This project helped us understand sensor integration, automation control, and the practical application of microcontrollers in creating energy-efficient systems.",
      images: [speed2, speed1],
    },
    {
      id: 4,
      title: "Cisco Pocket Network Project",
      description:
        "We designed and simulated a multi-building network system that connects several departments, including Administration, HR, Engineering, and Marketing. Each building contains multiple PCs, laptops, and printers interconnected through switches and routers to form a secure and efficient local area network (LAN). We configured essential network services such as DHCP, DNS, and Email servers, enabling dynamic IP assignment, domain name resolution, and internal communication. The project demonstrated our understanding of network topology design, IP addressing, routing, and interconnectivity, ensuring reliable communication across all buildings within the simulated organization.",
      images: [
        cisco1,
        cisco2,
        cisco3,
        cisco4,
        cisco5,
        cisco6,
        cisco7,
        cisco8,
        cisco9,
        cisco10,
      ],
    },
    {
      id: 5,
      title: "Home Page Assessment Project phil",
      description:
        "I was given an assignment by a potential client to revamp their website’s home page as part of an application process. Although I was not among the shortlisted candidates, the project provided valuable hands-on experience and helped me improve my web development skills. Using raw HTML, CSS, and JavaScript, I redesigned the layout and enhanced the visual appeal and functionality of the home page to create a more user-friendly and responsive design that aligned with the client’s branding and goals.",
      images: [home1, home2, home3, home4, home5, home6],
      linktosite: "https://home-project-cyan.vercel.app/",
    },
    {
      id: 6,
      title: "Starting to learn Game Development",
      description:
        "I’m starting to learn game development, beginning with Scratch to understand the basics of logic, movement, and design. From there, I’m exploring platforms like Roblox Studio and Unity to gain experience in creating more advanced and interactive games.",
      images: [game1, game2, game3],
    },
  ];
  return (
    <>
      <main className="projectmain">
        <aside>
          <h4>Projects</h4>
          <div className="asidenav">
            <div className="radio-container">
              <input
                defaultChecked
                id="radio-ecommerce"
                name="radio"
                type="radio"
                onClick={() => setActiveIndex(1)}
              />
              <label htmlFor="radio-ecommerce">E-commerce Website</label>
              <input
                id="radio-thesis"
                name="radio"
                type="radio"
                onClick={() => setActiveIndex(2)}
              />
              <label htmlFor="radio-thesis">Thesis design</label>
              <input
                id="radio-speedfan"
                name="radio"
                type="radio"
                onClick={() => setActiveIndex(3)}
              />
              <label htmlFor="radio-speedfan">Automatic speed fan</label>
              <input
                id="radio-cisco"
                name="radio"
                type="radio"
                onClick={() => setActiveIndex(4)}
              />
              <label htmlFor="radio-cisco">Cisco pocket project</label>
              <input
                id="radio-assessment"
                name="radio"
                type="radio"
                onClick={() => setActiveIndex(5)}
              />
              <label htmlFor="radio-assessment">Assessment project</label>
              <input
                id="radio-game"
                name="radio"
                type="radio"
                onClick={() => setActiveIndex(6)}
              />
              <label htmlFor="radio-game">Game Development</label>
              <div className="glider-container">
                <div className="glider" />
              </div>
            </div>
          </div>
        </aside>

        <section className="projectdetails">
          {projectsContent.map((project) =>
            activeIndex === project.id ? (
              <div key={project.id} className="divproject">
                <Carousel project={project} />
                <h1>
                  {project.title}{" "}
                  {project.linktosite ? (
                    <a
                      href={project.linktosite}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (go to the site)
                    </a>
                  ) : null}
                </h1>
                <p>{project.description}</p>
              </div>
            ) : null
          )}
        </section>
      </main>
    </>
  );
}

type Project = {
  id: number;
  title: string;
  description: string;
  images: string[];
};

function Carousel({ project }: { project: Project }) {
  const [current, setCurrent] = useState(0);

  const nextImage = () =>
    setCurrent((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  const prevImage = () =>
    setCurrent((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));

  return (
    <div className="carousel">
      <button className="prev" onClick={prevImage}>
        ‹
      </button>

      <div className="carousel-image">
        <img
          src={project.images[current]}
          alt={`${project.title} ${current + 1}`}
        />
      </div>

      <button className="next" onClick={nextImage}>
        ›
      </button>

      <div className="carousel-dots">
        {project.images.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
