import "./Gallery.css";
import PropTypes from "prop-types";
import { getGalleryConfig } from "../../../utils/galleryConfig";
import { useParams } from "react-router-dom";
import { PageLayout } from "../../common/Layout/PageLayout";

export default function Gallery({}) {
  Gallery.propTypes = {
    id: PropTypes.int,
  };

  let params = useParams();
  const gallery = getGalleryConfig(parseInt(params.galleryId));

  return (
    <PageLayout>
      <div className="gallery-content">
        <div className="gallery-header">
          <div className="gallery-name">{gallery.name}</div>
          <div className="gallery-description">{gallery.description}</div>
        </div>
        <ul className="grid media-grid media-scroller">
          {gallery.assets.map((item, index) => (
            <li key={index} className="grid-item">
              <img
                src={`/assets/gallery/${params.galleryId}/${item.id}.png`}
                alt={item.alt}
                className="scrolled-photo"
              />
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
