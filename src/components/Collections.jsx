import img1 from "../assets/collection-images/iMaschination.png";
import img2 from "../assets/collection-images/TheWorldAwake.png";
import img3 from "../assets/collection-images/OneTimeOnly.png";
import "./Collections.css";

import Header from "./Header";
import Footer from "./Footer";

export default function Collections() {
  return (
    <>
      <div className="collections-page-content">
        <Header />
        <div className="collections-links">
          <a href="/iMaschination">
            <figure>
              <img className="collection-img" src={img1} />
              <figcaption className="collection-caption">
                iMaschination
              </figcaption>
            </figure>
          </a>
          <a href="/theworldawake">
            <figure>
              <img className="collection-img" src={img2} />
              <figcaption className="collection-caption">
                The World Awake
              </figcaption>
            </figure>
          </a>
          <a href="/onetimeonly">
            <figure>
              <img className="collection-img" src={img3} />
              <figcaption className="collection-caption">
                One Time Only
              </figcaption>
            </figure>
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
}
