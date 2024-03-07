import PropTypes from "prop-types";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
    return (
      <div className={css.div}>
        <button type="button" onClick={onClick}>
          Load More
        </button>
      </div>
    )};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;

