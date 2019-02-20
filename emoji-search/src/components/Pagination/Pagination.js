import React from 'react';

const Pagination = (props) => {
    return (
        <div className="pagination-wrapper m-auto">
            <ul className="pagination">
                {
                    props.pageNumber.length > 0 && props.pageNumber.map(number => {
                        return (
                            <li className="page-item" key={number} onClick={() => props.paginateData(number)}>
                                <a className="page-link">{number}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Pagination;