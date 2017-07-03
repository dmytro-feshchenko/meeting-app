import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ScrollToTopButton component
 * Renders button with onClick handler.
 * After click executes smooth scroll to the top of the page.
 * Can be customized with additional options such as
 * delayInMs and scrollStepInPx.
 *
 * @author Dmitriy Feschenko
 * @version 1.0
 *
 * Examples:
 * <ScrollToTopButton delayInMs={100} scrollStepInPx={50} />
 */
class ScrollToTopButton extends Component {
    /**
     * Constructor for ScrollToTopButton component
     * @constructor
     */
    constructor() {
        super();
        this.state = {
            intervalId: 0
        }
    }

    /**
     * Scrolls page on one step if top is not made yet
     * Otherwise, clears interval
     */
    scrollStep() {
        if (window.pageYOffset == 0) {
            clearInterval(this.state.intervalId);
        } else {
            window.scroll(0, window.pageYOffset - this.props.scrollStepInPx)
        }
    }

    /**
     * Scrolls page to the top
     * Uses Interval function to emulate smooth scrolling
     */
    scrollPageToTop() {
        const intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({
            intervalId: intervalId
        });
    }

    render() {
        return (
            <button className="back-to-top-button"
                onClick={this.scrollPageToTop.bind(this)}
                >Back to Top <i className="fa fa-arrow-circle-up" /></button>
        )
    }
}

ScrollToTopButton.propTypes = {
    delayInMs: PropTypes.number.isRequired,
    scrollStepInPx: PropTypes.number.isRequired
};

export default ScrollToTopButton;