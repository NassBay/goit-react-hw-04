// image-api.js
import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
const API_KEY = "hL6p_cPGuFc7G4z7mpFtKbvY0qXUfL9XXx_lI1nrqt4";
const perPage = 12;

export const fetchImages = async (searchQuery, currentPage) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/photos?query=${searchQuery}&page=${currentPage}&client_id=${API_KEY}&per_page=${perPage}&orientation=landscape`
    );
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch images");
  }
};

