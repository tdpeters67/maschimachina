import Header from "./Header";
import Footer from "./Footer";
import "./Gallery.css";
import twaimg1 from "../assets/the-world-awake-images/IMG_8288.png";
import twaimg2 from "../assets/the-world-awake-images/IMG_8376.png";
import twaimg3 from "../assets/the-world-awake-images/IMG_8384.png";
import twaimg4 from "../assets/the-world-awake-images/IMG_8450.png";
import twaimg5 from "../assets/the-world-awake-images/IMG_8591.png";
import twaimg6 from "../assets/the-world-awake-images/IMG_8610.png";

export default function Gallery({ galleryName, galleryText }) {
  return (
    <div className="gallery-content">
      <Header />
      <div className="gallery-header">
        <div className="gallery-name">{galleryName}</div>
        <div className="gallery-description">{galleryText}</div>
      </div>
      <div className="media-scroller snaps-inline">
        <div className="media-element">
          <img className="scrolled-photo" src={twaimg1}></img>
        </div>
        <div className="media-element">
          <img className="scrolled-photo" src={twaimg2}></img>
        </div>
        <div className="media-element">
          <img className="scrolled-photo" src={twaimg3}></img>
        </div>
        <div className="media-element">
          <img className="scrolled-photo" src={twaimg4}></img>
        </div>
        <div className="media-element">
          <img className="scrolled-photo" src={twaimg5}></img>
        </div>
        <div className="media-element">
          <img className="scrolled-photo" src={twaimg6}></img>
        </div>
      </div>

      <Footer />
    </div>
  );
}
