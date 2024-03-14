import "./Home.css";
import Footer from "../../common/Footer/Footer";
import { PrimaryNav } from "../../common/PrimaryNav/PrimaryNav";

export default function Home() {
  return (<>
      <div className="home-content">
        <section className="title">
          <h1>jewelry design</h1>
          <h1>{"\u00B7"} </h1>
          <h1> bespoke fabrication</h1>
        </section>
        {
          <img
            src={ `/assets/home/${Math.floor(1 + (Math.random() * 3))}.png` }
            alt="home photo"
            className="home-photo"
          ></img>
        }
        <section className="title">
          <PrimaryNav />
        </section>
      </div>
      <Footer />
    </>
  );
}
