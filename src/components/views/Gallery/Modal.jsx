import { useState, forwardRef } from "react";
import "./Modal.css";

const Modal = forwardRef(function Modal(
  { gallery, galleryId, slideNumber, prevSlide, nextSlide, handleCloseModal },
  ref
) {
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
