import React from "react";
import "./paginate.scss";

const Pagination = ({ userPerPage, totalUser, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalUser / userPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="paginate">
      {pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)} className="page-item">
            {number}
          </button>
      ))}
    </div>
  );
};

export default Pagination;
