import "./Home.css";
import img1 from "../assets/HomePage/HomePageSplash1.png";
import img2 from "../assets/HomePage/HomePageSplash2.png";
import img3 from "../assets/HomePage/HomePageSplash3.png";

export default function Home() {
  let homePhotos = [img1, img2, img3];

  return (
    <div className="home-content">
      <section
        className="title"
        style={{
          backgroundImage: `url(${
            homePhotos[Math.floor(Math.random() * homePhotos.length)]
          })`,
        }}
      >
        <h1>jewelry design</h1>
        <h1>{"\u00B7"} </h1>
        <h1> bespoke fabrication</h1>
      </section>
      {/* <img
        src={homePhotos[Math.floor(Math.random() * homePhotos.length)]}
        alt="home photo"
      ></img> */}
      <section className="title">
        <h1>
          <a href="/collections">collections</a>
        </h1>
        <h1>{"\u00B7"} </h1>
        <h1>
          <a href="/customs">customs</a>
        </h1>
        <h1>{"\u00B7"} </h1>
        <h1>
          <a href="/catalog">catalog</a>
        </h1>
      </section>
    </div>
  );
}
