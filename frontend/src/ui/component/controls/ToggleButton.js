import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ToggleButton
 * Defines simple toggle button which can be in one of two possible states:
 * checked or unchecked
 *
 * @author Dmitriy Feschenko
 * @version 1.0
 *
 * Examples:
 * <ToggleButton label="Select" checkedLabel="Deselect" />
 * <ToggleButton label="Select" checkedLabel="Deselect" checked={true} />
 */
class ToggleButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked,
            label: this.props.checked ? this.props.checkedLabel: this.props.label
        };
    }

    /**
     * Toggles button state.
     * Sets state to checked if the button was unchecked.
     * Otherwise, sets state prop to unchecked.
     */
    toggleButtonState() {
        this.setState({
            checked: !this.state.checked,
            label: this.state.checked ? this.props.label: this.props.checkedLabel
        });
    }

    render() {
        return (
            <div className={this.state.checked ? "button button_switch button_checked" : "button button_switch"}
                 onClick={this.toggleButtonState.bind(this)}>
                {this.state.label}
            </div>
        )
    }
}

ToggleButton.propTypes = {
    label: PropTypes.string.isRequired,
    checkedLabel: PropTypes.string.isRequired,
    checked: PropTypes.bool
};

ToggleButton.defaultProps = {
    checked: false
};

export default ToggleButton;