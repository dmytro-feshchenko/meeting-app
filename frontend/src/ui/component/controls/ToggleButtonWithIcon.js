import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ToggleButtonWithIcon component
 * Renders buttons with icon.
 * Can be in 2 states: checked/unchecked.
 *
 * @author Dmitriy Feschenko
 * @version 1.0
 *
 * Examples:
 * <ToggleButtonWithIcon icon="fa fa-thumbs-o-up" iconActive="fa fa-thumbs-up" />
 */
class ToggleButtonWithIcon extends Component {
    /**
     * Constructor for ToggleButtonWithIcon component
     * @constructor
     */
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div className={this.props.active ? "toggle-button toggle-button_active" : "toggle-button" }>
                <span className="toggle-button__icon"><i className={this.props.icon} /></span>
                <span className="toggle-button__label">{this.props.label}</span>
            </div>
        )
    }
}

ToggleButtonWithIcon.propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    iconActive: PropTypes.string,
    iconHover: PropTypes.string
};

ToggleButtonWithIcon.defaultProps = {
    active: false,
};

export default ToggleButtonWithIcon;