import React from "react";
import "./styles.css";

const Pagination = ({
  page,
  perPage,
  count,
  onChangePage,
  onChangePerPage,
}) => {
  const startIndex = (page - 1) * perPage;
  const endIndex = page * perPage;
  const isPrevious = startIndex > 0;
  const isNext = endIndex < count;

  return (
    <div className="pagination">
      <button
        className="pagination__page-button"
        onClick={() => onChangePage(page - 1)}
        disabled={!isPrevious}
      >
        Previous
      </button>
      <span className="pagination__page-info">{`Page: ${page}`}</span>
      <span className="pagination__page-info">{`Per page: ${perPage}`}</span>
      <button
        className="pagination__page-button"
        onClick={() => onChangePage(page + 1)}
        disabled={!isNext}
      >
        Next
      </button>
      <input
        onChange={(e) => onChangePerPage(e.target.value)}
        type="number"
        min={1}
        max={100}
        value={perPage}
      />
    </div>
  );
};

export default Pagination;
