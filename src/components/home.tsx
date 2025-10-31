import homeImage from "../assets/homeimage-rbg.png";
import "../styles/home.scss"; // import SCSS file

export default function Home() {
  return (
    <>
      <main className="home">
        <section className="image-section">
          <img src={homeImage} alt="home-image" />
        </section>

        <section className="intro">
          <header>
            <h1 className="first-name">HELLO, IT'S CED</h1>
            {/* <h1 className="last-name">ABINES</h1> */}
            <h2>Computer Engineer</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              neque totam officia voluptatem quia excepturi aspernatur,
              molestias enim veritatis qui amet sapiente velit, animi, cum quas
              recusandae aliquid reprehenderit minima?
            </p>
          </header>
          <div className="buttons">
            <button className="resume-btn" onClick={() => {}}>
              Resume
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
