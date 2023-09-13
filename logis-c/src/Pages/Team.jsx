import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/image.jpg";
import Person2 from "../images/team/image.jpg";
import Person3 from "../images/team/image.jpg";
import Person4 from "../images/team/image.jpg";
import Person5 from "../images/team/image.jpg";
import Person6 from "../images/team/image.jpg";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Unkwown", job: "Driver" },
    { img: Person2, name: "Unkwown", job: "Driver" },
    { img: Person3, name: "Unkwown", job: "Driver" },
    { img: Person4, name: "Unkwown", job: "Driver" },
    { img: Person5, name: "Unkwown", job: "Driverc" },
    { img: Person6, name: "Unkwown", job: "Driver" },
  ];
  return (
    <>
    {/*Initially i wanted this to be a team section but
     it should be the section where they get to book a driver*/ }
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                  {/*David style the driver button*/}
                  <button className="btn-driver">Book This Driver</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Team;
