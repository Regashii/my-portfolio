import { useState } from "react";
import {
  cisco1,
  ecommerce1,
  ecommerce2,
  ecommerce3,
  ecommerce4,
  ecommerce5,
  ecommerce6,
  ecommerce7,
  ecommerce8,
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
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aspernatur sit, ab error fugiat earum eveniet. Sint, quis recusandae sunt laudantium tempora nemo, dicta voluptates nulla sequi labore, architecto est earum soluta delectus amet minus deleniti laboriosam similique corporis expedita magni at? Odio, voluptatem consectetur nulla velit sint repudiandae ducimus optio repellendus ipsam quibusdam sequi earum dicta ipsum laborum, ut tempore recusandae quaerat iusto corrupti. Doloribus exercitationem quisquam architecto neque sapiente, harum soluta dignissimos perspiciatis, similique quo voluptatem et, molestias asperiores nemo non voluptate voluptates rem in voluptatum culpa enim nihil quas obcaecati? Vitae eius voluptates, fuga dolor tempore, laboriosam molestiae dicta aliquid voluptas iure nisi aut non sunt magnam odit dignissimos fugit! Vel dolores reiciendis omnis officia repellat fuga saepe? Et id aperiam ex, tempora",
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
    },
    {
      id: 2,
      title: "Thesis Design (Robotic Arm)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repudiandae illum aliquid minima eaque beatae odit sit alias, maiores ducimus dignissimos dolor sed quae commodi fugiat hic repellat fuga perferendis?",
      images: [thesis1, mobile1, mobile2, mobile3],
    },
    {
      id: 3,
      title: "Automatic Speed Fan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repudiandae illum aliquid minima eaque beatae odit sit alias, maiores ducimus dignissimos dolor sed quae commodi fugiat hic repellat fuga perferendis?",
      images: [speed1, speed2],
    },
    {
      id: 4,
      title: "Cisco Pocket Network Project",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repudiandae illum aliquid minima eaque beatae odit sit alias, maiores ducimus dignissimos dolor sed quae commodi fugiat hic repellat fuga perferendis?",
      images: [cisco1],
    },
    {
      id: 5,
      title: "Home Page Assessment Project",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repudiandae illum aliquid minima eaque beatae odit sit alias, maiores ducimus dignissimos dolor sed quae commodi fugiat hic repellat fuga perferendis?",
      images: [ecommerce2],
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
                {/* <div className="image-gallery">
                  {project.images.map((imgSrc, index) => (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`${project.title} ${index + 1}`}
                    />
                  ))}
                </div> */}
                <Carousel project={project} />
                <h1>{project.title}</h1>
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
