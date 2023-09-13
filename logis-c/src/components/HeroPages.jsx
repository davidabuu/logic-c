import { Link } from "react-router-dom";

function HeroPages() {
  return (
    <>
      <section className="hero-pages">
        <div className="hero-pages__overlay"></div>
        <div className="container">
          <div className="hero-pages__text">
            <h3>Our Driver</h3>
            <p>
              <Link to="/">Home</Link> / Driver
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPages;
