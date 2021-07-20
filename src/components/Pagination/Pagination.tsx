import { useState, useEffect } from "react";

import './Pagination.css'

interface IPaginationProps {
  currentPage: number;
  pagesCount: number;
  getCurrentPage: (item: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  pagesCount,
  getCurrentPage,
}) => {
  const [pages, setPages] = useState<any>([]);

  const prevPage = () => {
    getCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    getCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const createPages = () => {
      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
      }
      setPages(pages);
    };
    createPages();
  }, [pagesCount]);

  return (
    <div className="pagination-wrapper">
      <ul className="pagination">
        <li className="page-item" onClick={prevPage}>
          <button
            className="page-link"
            aria-label="Previous"
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
        </li>
        {pages.map((item: number, index: any) => (
          <li
          className={currentPage === item? "page-item active" :"page-item "}
            key={index}
            onClick={() => getCurrentPage(item)}
          >
            <button className="page-link">{item}</button>
          </li>
        ))}
        <li className="page-item" onClick={nextPage}>
          <button
            className="page-link"
            aria-label="Previous"
            disabled={pagesCount === currentPage}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
