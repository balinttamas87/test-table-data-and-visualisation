import React from "react";
import "./styles.css";

const Pagination = ({ page, perPage, count, onChangePage, onChangePerPage }) => {
  const startIndex = (page - 1) * perPage;
  const endIndex = page * perPage;
  const isPrevious = startIndex > 0;
  const isNext = endIndex < count;

  return (
    <div className="pagination">
      {isPrevious && <button className="pagination__page-button" onClick={() => onChangePage(page - 1)}>prev</button>}
      <span className="pagination__page-info">{`page: ${page}`}</span>
      <span className="pagination__page-info">{`perPage: ${perPage}`}</span>
      {isNext && <button className="pagination__page-button" onClick={() => onChangePage(page + 1)}>next</button>}
      <input onChange={(e) => onChangePerPage(e.target.value)} />
    </div>
  );
};

export default Pagination;
