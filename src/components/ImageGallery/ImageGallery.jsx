// ImageGallery.jsx
import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal}) => {
  return (
    <ul className={css.ul}>
      {images.map((image) => (
        <li className={css.li} key={image.id}>
          <ImageCard image={image} onImageClick={openModal} />
        </li>
      ))}
    </ul>
  );
};



ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
