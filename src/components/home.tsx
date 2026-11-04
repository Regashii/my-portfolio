import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import AppBar from "./appbar";
import game1 from "../assets/games/game1.png";
import ecommerce from "../assets/ecommerce/ecommerce1.png";
import thesis from "../assets/thesis/thesis1.jpg";
import speedFan from "../assets/speed/speed1.png";
import "../styles/home.scss";

const projects = [
  { n: "01", title: "Roblox game", kind: "GAME DEVELOPMENT / IN PROGRESS", text: "I am actively developing a Roblox game, shaping the gameplay and building its world. I am also learning Blender to create 3D models and assets.", img: game1, featured: true },
  { n: "02", title: "Baked Goodies", kind: "WEB DEVELOPMENT", text: "A team-built cake ordering website. I worked on the client interface, dashboard, and order management flow.", img: ecommerce },
  { n: "03", title: "Robotic waste collection", kind: "EMBEDDED SYSTEMS / THESIS", text: "A mobile-controlled robot for collecting waste in hard-to-reach areas, combining embedded hardware and an app.", img: thesis },
  { n: "04", title: "Automatic speed fan", kind: "MICROCONTROLLERS", text: "A temperature-sensing fan that adjusts its speed automatically using a microcontroller.", img: speedFan },
];

export default function Home() {
  return <>
    <AppBar />
    <main>
      <section className="hero page-width" id="home">
        <div className="hero-copy"><p className="eyebrow"><i /> COMPUTER ENGINEERING / CREATIVE DEVELOPMENT</p><h1>Making ideas<br />feel <em>real.</em></h1><p className="hero-intro">I'm Cedrick Abines, a Computer Engineering graduate creating a Roblox game and learning 3D modeling in Blender.</p><div className="hero-actions"><a className="button" href="#projects">Explore my work <ArrowDown size={16}/></a><a className="text-link" href="mailto:cedrickabines15@gmail.com">Let's talk <ArrowUpRight size={16}/></a></div><p className="hero-note">Currently building in Roblox Studio</p></div>
        <a className="scroll-cue" href="#projects" aria-label="Scroll to projects"><ArrowDown size={16}/></a>
      </section>
      <section className="projects-section" id="projects"><div className="page-width"><div className="section-kicker"><p className="eyebrow">SELECTED WORK</p><span>2021 - PRESENT</span></div><div className="section-heading"><h2>A few things<br/>I've been making.</h2><p>From software and hardware to game worlds, I like learning by building.</p></div><div className="project-grid">{projects.map(p=><article className={p.featured ? "project featured" : "project"} key={p.n}><div className="project-image"><img src={p.img} alt={p.title}/><span>{p.n}</span></div><div className="project-copy"><p className="project-kind">{p.kind}</p><h3>{p.title}</h3><p>{p.text}</p></div></article>)}</div><div className="blender-note"><b>B</b><div><p className="project-kind">ALSO IN PROGRESS</p><h3>Learning Blender, one model at a time.</h3><p>Practicing 3D modeling and exploring how custom assets can bring game ideas to life.</p></div></div></div></section>
      <section className="about-section page-width" id="about"><div><p className="eyebrow">A LITTLE ABOUT ME</p><h2>Technical mind.<br/><em>Creative hands.</em></h2></div><div className="about-copy"><p>I studied Computer Engineering at Pampanga State University. My past work includes web applications, embedded systems, and networking. Right now, I'm focused on game development and 3D art, building skills through hands-on projects.</p><div className="tool-list"><span>TOOLS & INTERESTS</span><p>Roblox Studio <i/> Blender <i/> React <i/> JavaScript <i/> Python <i/> Arduino</p></div></div></section>
      <section className="contact-section" id="contact"><div className="page-width"><div><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let's make<br/><em>something good.</em></h2></div><a href="mailto:cedrickabines15@gmail.com">cedrickabines15@gmail.com <ArrowUpRight size={18}/></a></div></section>
    </main>
    <footer className="page-width"><span>Copyright {new Date().getFullYear()} Cedrick Abines</span><div><a href="https://github.com/Regashii" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://www.linkedin.com/in/john-cedrick-abines-384325378/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:cedrickabines15@gmail.com" aria-label="Email"><Mail size={17}/></a></div><a href="#home">BACK TO TOP ^</a></footer>
  </>;
}
