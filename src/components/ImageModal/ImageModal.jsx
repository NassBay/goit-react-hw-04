// ImageModal.jsx
import React from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Темний фон з прозорістю
    zIndex: "1000", // Задайте високий індекс, щоб вікно було поверх усіх інших елементів
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    backgroundColor: "transparent", // Прозорий фон модального вікна
    border: "none", // Відсутність рамки
    boxShadow: "none", // Відсутність тіні
  },
};

const ImageModal = ({ isOpen, onClose, imageUrl, imageAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div>
        <img className={css.img} alt={imageAlt} src={imageUrl} />
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default ImageModal;
