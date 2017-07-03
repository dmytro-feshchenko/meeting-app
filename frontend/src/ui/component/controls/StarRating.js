import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * StarRating component
 * Represents group of stars with optional summary (e.g., 3 out of 5)
 *
 * @author Dmitriy Feschenko
 * @version 1.0
 *
 * Examples:
 * <StarRating rating={3} />
 * <StarRating rating={3} showSummary={true} maxRating={5} />
 */
class StarRating extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    renderStars() {
        let stars = [];
        for (let i = 1; i <= this.maxRating; i++ ) {
            let className = "rating__star";
            if (this.props.rating > (i - 1) + 0.33
                && this.props.rating < (i - 1) + 0.67) {
                // half star
                className += " rating__star_filled-half";
            } else if (this.props.rating >= (i - 0.33)) {
                className += " rating__star_filled-full";
            }
            stars.push(<span className={className} />);
        }
        return (
            <div className="rating__stars">
                {stars}
            </div>
        )
    }

    renderSummary() {
        return (
            <div className="rating__summary">{this.props.rating} out of {this.props.maxRating}</div>
        )
    }

    render() {
        return (
            <div className="rating">
                {this.renderStars.bind(this)}
                {this.props.showSummary ? () => this.renderSummary.call(this) : ""}
            </div>
        )
    }
}

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
    maxRating: PropTypes.number,
    showSummary: PropTypes.bool
};

StarRating.defaultProps = {
    showSummary: false,
    maxRating: 5
};

export default StarRating;