import sensors from "../assets/sensors.png";
import soldering from "../assets/soldering.jpg";
import "../styles/about.scss"; // import SCSS file

export default function AboutMe() {
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

  const embbeded = [
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
    {
      name: "Soldering",
      logo: soldering,
      bg: "#DAA520",
    },
    {
      name: "Sensors",
      logo: sensors,
      bg: "#228B22",
    },
  ];
  return (
    <main className="aboutmain">
      <section className="programming-card">
        <div className="card-content">
          <h2>Programming</h2>
          <div className="underline"></div>
          <p>
            Skilled in multiple programming languages and technologies for web,
            software, and app development. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Velit eaque nesciunt delectus mollitia
            reprehenderit, soluta, libero, blanditiis quos porro iste ullam
            exercitationem voluptatibus animi. Maxime provident vitae, eos sunt
            laborum natus. Autem, in. Cumque et est sed quae reiciendis? Harum
            quisquam enim quibusdam obcaecati fugiat explicabo non laborum natus
            ducimus. Expedita quis adipisci sequi tempore laborum error possimus
            quaerat accusantium, nemo sed magni ex animi dignissimos, nulla
            porro quo voluptas perferendis eum repellendus! Fugit facere porro
            ut, distinctio consectetur dolorum ipsum numquam recusandae quidem
            quod cum. Optio aut corrupti ea mollitia, odio vel aliquid,
            doloremque esse assumenda omnis alias ab dignissimos, quas
            blanditiis veritatis ducimus nisi in facilis consequuntur modi
            excepturi. Commodi, molestiae dolor? At est architecto saepe
            delectus? Perferendis veniam, architecto tempore labore velit
            mollitia exercitationem temporibus obcaecati assumenda fugit sit
            deserunt accusantium commodi officiis laborum nihil odit nemo fugiat
            quasi ducimus maxime libero! Ipsa saepe pariatur nobis repellendus
            nostrum nam sit, repellat unde porro expedita accusamus libero sunt
            debitis molestias perspiciatis doloribus minus? Esse repellendus
            veniam vitae ex assumenda error amet ab ipsa quae dolor voluptatum
            temporibus ratione ea harum modi qui accusantium atque, ipsum
            praesentium? Aliquam voluptatibus soluta ipsam quae, consequuntur
            autem temporibus molestiae consectetur velit exercitationem.
          </p>
          <div className="skills-grid">
            {coding.map((coding) => (
              <div className="skill-item" key={coding.name}>
                <img src={coding.logo} alt={coding.name} />
                <span style={{ color: coding.bg }}>{coding.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="embedded-card">
        <div className="card-content">
          <h2>Embedded Systems & Electronics</h2>
          <div className="underline"></div>
          <p>
            Experienced in building and testing embedded systems, circuit
            design, and hardware interfacing for automation and robotics
            projects. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Culpa aliquam corporis consequuntur harum tempore. Quis, atque hic.
            Deserunt similique excepturi aliquid pariatur, nemo eligendi omnis
            non perspiciatis. Iusto possimus repudiandae id dolor, distinctio
            tenetur quod similique totam a. Porro mollitia, velit in officia
            quidem nisi corporis voluptates animi illum ex tenetur fugit error
            tempore beatae ipsa modi earum nostrum libero nihil atque quia at
            odio sit! Unde accusamus aliquam aut vel cupiditate explicabo quas
            modi nemo vero culpa iste repudiandae, at doloribus aperiam!
            Corrupti, architecto officiis? Earum, porro modi! Facilis velit
            minus, totam distinctio corporis eligendi et omnis voluptatum,
            dolore quisquam veritatis quidem nesciunt dignissimos quas. Ex
            dolorum ducimus labore nesciunt cumque veritatis deleniti dolor vero
            quisquam illo cupiditate rem obcaecati itaque explicabo veniam
            perspiciatis excepturi consectetur similique enim delectus, expedita
            possimus maxime dignissimos recusandae? Veniam totam distinctio
            maxime magni possimus cum perferendis suscipit omnis dolores? Modi
            optio corporis velit.
          </p>
          <div className="skills-grid">
            {embbeded.map((tool) => (
              <div className="skill-item" key={tool.name}>
                <img src={tool.logo} alt={tool.name} />
                <span style={{ color: tool.bg }}>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
