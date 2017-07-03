import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Pagination component
 */
class Pagination extends Component {

    render() {
        const startPostNumber = (this.props.currentPage - 1) * this.props.perPage + 1;
        let endPostNumber = this.props.currentPage * this.props.perPage;
        if (endPostNumber > this.props.totalCount) {
            endPostNumber = this.props.totalCount;
        }
        return (
            <div className="pagination">
                <div className="pagination__info">
                    {startPostNumber}-{endPostNumber} out of {this.props.totalCount}
                </div>
            </div>
        )
    }
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
    maxPagesVisible: PropTypes.number
};

Pagination.defaultProps = {
    maxPagesVisible: 5
};

export default Pagination;