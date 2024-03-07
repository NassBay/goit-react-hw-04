// App.jsx
import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import CustomLoader from "../Loader/CustomLoader.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import Error from "../Error/Error.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import { fetchImages } from "./image-api.js";
import ImageModal from "../ImageModal/ImageModal.jsx"; // Зміна імпорту
import { Toaster } from "react-hot-toast";

const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImagesData = async () => {
      setIsLoading(true);
      try {
        const newImages = await fetchImages(searchQuery, currentPage);
        setImages((prevImages) => [...prevImages, ...newImages]);
      } catch (error) {
        console.error("Error fetching images:", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImagesData();
  }, [searchQuery, currentPage]);

  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setImages([]);
    setCurrentPage(1);
    setError(false);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImg(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      <Toaster />
      {error && <Error />}
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <CustomLoader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          imageUrl={selectedImg.urls.regular}
          imageAlt={selectedImg.alt_description}
        />
      )}
    </div>
  );
};

export default App;
