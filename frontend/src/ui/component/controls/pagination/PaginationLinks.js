import React from 'react';

/**
 * PaginationLinks
 * @param props
 * @returns {XML}
 * @constructor
 */
const PaginationLinks = (props) => {
    const paginationLinks = props.items.map((item, key) => (
        <div key={key} className="pagination__link pagination__link_page">
            <a href={item.link}>{item.name}</a>
        </div>
    ));
    return (
        <div className="pagination">
            <div className="pagination__link pagination__link_prev"></div>
            {paginationLinks}
            <div className="pagination__link pagination__link_next"></div>
        </div>
    )
};

export default PaginationLinks;