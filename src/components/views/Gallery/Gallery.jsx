import "./Gallery.css";
import PropTypes from "prop-types";
import { getGalleryConfig } from "../../../utils/galleryConfig";
import { useParams } from "react-router-dom";
import { PageLayout } from "../../common/Layout/PageLayout";
import { useState, useRef, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Modal from "./Modal";

export default function Gallery({}) {
  const dialog = useRef();
  const [slideNumber, setSlideNumber] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [touchPosition, setTouchPosition] = useState(null);

  Gallery.propTypes = {
    id: PropTypes.int,
  };

  let params = useParams();
  const gallery = getGalleryConfig(parseInt(params.galleryId));

  //lightbox functions
  function openLightBox(index) {
    setModalOpen(true);
    dialog.current.showModal();
    setSlideNumber(index);
    document.body.style.overflow = "hidden";
  }

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(gallery.assets.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === gallery.assets.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  const handleCloseModal = () => {
    dialog.current.close();
    document.body.style.overflow = "unset";
  };
  ///swipe functions

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 13) {
      nextSlide();
    }

    if (diff < -13) {
      prevSlide();
    }

    setTouchPosition(null);
  };

  return (
    <>
      <Modal
        galleryId={params.galleryId}
        gallery={gallery}
        slideNumber={slideNumber}
        ref={dialog}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        handleCloseModal={handleCloseModal}
        handleTouchMove={handleTouchMove}
        handleTouchStart={handleTouchStart}
      />
      <PageLayout>
        <div className="gallery-content">
          <div className="gallery-header">
            <div className="gallery-name">{gallery.name}</div>
            <div className="gallery-description">{gallery.description}</div>
          </div>
          <ul className="grid">
            {gallery.assets.map((item, index) => (
              <li
                key={index}
                className="grid-item"
                onClick={() => openLightBox(index)}
              >
                <div className="hover-bg"></div>
                <LazyLoadImage
                  src={`/assets/gallery/${params.galleryId}/${item.id}.png`}
                  alt={item.alt}
                  className="effects"
                  // height="400px"
                  // width="400px"
                  effect="blur"
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
