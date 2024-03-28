import { forwardRef } from "react";
import "./Modal.css";

const Modal = forwardRef(function Modal(
  {
    gallery,
    galleryId,
    slideNumber,
    prevSlide,
    nextSlide,
    handleCloseModal,
    handleTouchStart,
    handleTouchMove,
  },
  ref
) {
  function handleKeyDown(event) {
    console.log(event.key);
    if (event.key === "ArrowRight") {
      {
        nextSlide();
      }
    }
    if (event.key === "ArrowLeft") {
      {
        prevSlide();
      }
    }
  }

  return (
    <dialog
      ref={ref}
      className="sliderWrap"
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          handleCloseModal();
        }
      }}
    >
      <img
        src="/assets/left-svgrepo-com.svg"
        className="back-btn"
        onClick={prevSlide}
      ></img>
      <img
        src="/assets/right-svgrepo-com.svg"
        className="next-btn"
        onClick={nextSlide}
      ></img>
      <img
        src="/assets/x-svgrepo-com.svg"
        className="close-btn"
        onClick={handleCloseModal}
      ></img>
      <img
        className="slider-img"
        src={`/assets/gallery/${galleryId}/${gallery.assets[slideNumber].id}.png`}
      />
      <div className="modal-description">
        {gallery.assets[slideNumber].title}
      </div>
    </dialog>
  );
});

export default Modal;
