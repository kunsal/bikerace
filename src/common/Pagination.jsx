import React from "react";
import { Nav } from "react-bootstrap";

const Pagination = ({links, current_page, last_page, handlePagination, loading}) => {
  return (
    links ? 
    <div class="shortcode-html">
      <Nav aria-label="Page Navigation">
        <ul class="list-inline">
          {links.length &&
            links.map(link => (
              <li class="list-inline-item g-hidden-sm-down">
                <a
                  class={`u-pagination-v1__item ${
                    current_page === link.label
                      ? "u-pagination-v1-2--active"
                      : "u-pagination-v1-2"
                  } g-rounded-50 g-pa-7-14`}
                  href={link.url ? link.url : "#"}
                  onClick={handlePagination}
                >
                  {link.label.toString().replace(/&laquo;|&raquo;/gi, '')}
                </a>
              </li>
            ))}
          <li class="list-inline-item float-right">
            <span class="u-pagination-v1__item-info g-pa-7-14">
              Page {current_page} of {last_page}
            </span>
          </li>
        </ul>
        <ul className="list-inline">
          <li className="list-inline-item">
            {loading && <Loader />}
          </li>
        </ul>
      </Nav>
    </div>
    :
    null
  );
};

export default Pagination;
