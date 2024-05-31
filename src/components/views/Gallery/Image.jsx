import React, { useEffect, useRef } from "react";

export default function Image({ src, alt }) {
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;

          const src = img.getAttribute("data-src");

          img.setAttribute("src", src);

          img.classList.add("fade");

          observer.disconnect();
        }
      });
    });

    observer.observe(imgRef.current);
  }, []);

  return (
    <img
      ref={imgRef}
      src="/assets/head-img-transparent.png"
      data-src={src}
      alt={alt}
      loading="lazy"
      className="lazy effects"
    />
  );
}
