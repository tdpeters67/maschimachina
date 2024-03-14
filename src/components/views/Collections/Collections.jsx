import img1 from "/assets/collection-images/iMaschination.png";
import img2 from "/assets/collection-images/TheWorldAwake.png";
import img3 from "/assets/collection-images/OneTimeOnly.png";
import "./Collections.css";
import { PageLayout } from "../../common/Layout/PageLayout";

import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";

export default function Collections() {
  return <PageLayout>
      <div className="collections-page-content">
        <div className="collections-links">
          <a href="/gallery/1">
            <figure>
              <img className="collection-img" src={img1} />
              <figcaption className="collection-caption">
                iMaschination
              </figcaption>
            </figure>
          </a>
          <a href="/gallery/2">
            <figure>
              <img className="collection-img" src={img2} />
              <figcaption className="collection-caption">
                The World Awake
              </figcaption>
            </figure>
          </a>
          <a href="/gallery/3">
            <figure>
              <img className="collection-img" src={img3} />
              <figcaption className="collection-caption">
                One Time Only
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </PageLayout>
}
