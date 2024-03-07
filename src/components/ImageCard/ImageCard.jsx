// ImageCard.jsx
import PropTypes from "prop-types";
import css from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  const handleClick = () => {
    onImageClick(image); // Pass the whole image object to the onImageClick function
  };

  return (
    <img
      className={css.img}
      src={image.urls.small}
      alt={image.alt_description}
      onClick={handleClick}
    />
  );
};

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageCard;
