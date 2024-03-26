import "./Gallery.css";
import PropTypes from "prop-types";
import { getGalleryConfig } from "../../../utils/galleryConfig";
import { useParams } from "react-router-dom";
import { PageLayout } from "../../common/Layout/PageLayout";
import { useState, useRef } from "react";
import Modal from "./Modal";

export default function Gallery({}) {
  const dialog = useRef();
  const [slideNumber, setSlideNumber] = useState(0);

  Gallery.propTypes = {
    id: PropTypes.int,
  };

  function openLightBox(index) {
    dialog.current.showModal();
    setSlideNumber(index);
    console.log(gallery.assets[slideNumber]);
  }

  const prevSlide = () => {
    slideNumber === 0 ? setSlideNumber(0) : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === gallery.assets.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  let params = useParams();
  const gallery = getGalleryConfig(parseInt(params.galleryId));

  return (
    <>
      <Modal
        galleryId={params.galleryId}
        gallery={gallery}
        slideNumber={slideNumber}
        ref={dialog}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
      <PageLayout>
        <div className="gallery-content">
          <div className="gallery-header">
            <div className="gallery-name">{gallery.name}</div>
            <div className="gallery-description">{gallery.description}</div>
          </div>
          <ul className="grid media-grid">
            {gallery.assets.map((item, index) => (
              <li
                key={index}
                className="grid-item"
                onClick={() => openLightBox(index)}
              >
                <img
                  src={`/assets/gallery/${params.galleryId}/${item.id}.png`}
                  alt={item.alt}
                  className="effects"
                />
                <div className="image-title fade">{item.title}</div>
              </li>
            ))}
          </ul>
        </div>
      </PageLayout>
    </>
  );
}
