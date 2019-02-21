import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
    return (
        <div className="pagination-wrapper">
            <ul className="pagination">
                {
                    props.pageNumber.length > 0 && props.pageNumber.map(number => {
                        return (
                            <li
                                className={(props.limit / 10) === number ? "page-item active" : "page-item"}
                                key={number}
                                onClick={() => props.paginateData(number)}>
                                <button className="page-link">{number}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Pagination;