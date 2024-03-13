import Header from "./Header";
import Footer from "./Footer";
import { theWorldAwakeGalleryImages } from "./galleryFiles";
import "./Gallery.css";
import PropTypes from "prop-types";

export default function Gallery({ galleryName, galleryText }) {
  Gallery.propTypes = {
    galleryName: PropTypes.string,
    galleryText: PropTypes.string,
  };

  const galleryItems = theWorldAwakeGalleryImages.map((item) => (
    <li key={item.id} className="media-element">
      <img src={item.src} alt={item.alt} className="scrolled-photo"></img>
    </li>
  ));

  return (
    <div className="gallery-content">
      <Header />
      <div className="gallery-header">
        <div className="gallery-name">{galleryName}</div>
        <div className="gallery-description">{galleryText}</div>
      </div>
      <ul className="media-scroller snaps-inline ">{galleryItems}</ul>

      <Footer />
    </div>
  );
}
