// SearchBar.jsx
import React, { useState } from "react";
import css from "./SearchBar.module.css";
import { toast } from "react-hot-toast";


const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      // Перевірка, чи текстове поле не порожнє
      toast.error("Please enter a search query", { position: "top-right" });// Показуємо сповіщення про порожнє текстове поле
      return;
    }
    onSubmit(query);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
