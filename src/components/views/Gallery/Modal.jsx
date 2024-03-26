import { useState, forwardRef } from "react";
import "./Modal.css";

const Modal = forwardRef(function Modal(
  { gallery, galleryId, slideNumber, prevSlide, nextSlide },
  ref
) {
  const handleCloseModal = () => {
    dialog.current.close();
  };

  //   const prevSlide = () => {
  //     slideNumber === 0 ? setSlideNumber(0) : setSlideNumber(slideNumber - 1);
  //   };

  //   const nextSlide = () => {
  //     slideNumber + 1 === gallery.assets.length
  //       ? setSlideNumber(0)
  //       : setSlideNumber(slideNumber + 1);
  //   };

  return (
    <dialog ref={ref} className="sliderWrap">
      <button onClick={prevSlide}>Back</button>
      <button onClick={nextSlide}>Next</button>
      <button onClick={handleCloseModal}>X</button>
      <img
        className="slider-img"
        src={`/assets/gallery/${galleryId}/${gallery.assets[slideNumber].id}.png`}
      />
    </dialog>
  );
});

export default Modal;

`/assets/gallery/{galleryId}/{gallery.assets[slideNumber].id}.png`;
