import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Dropdown component
 * Displays current active state of the dropdown.
 * After clicking on active state shows/hides dropdown
 * with all available options.
 * After clicking on some option - selects the option
 */
class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: this.props.selectedKey,
            selectedLabel: this.props.selectedLabel,
            dropdownOpened: false
        }
    }

    /**
     * Select item from dropdown
     * @param key Selected item key
     * @param label Selected item label
     */
    selectItem(key, label) {
        this.setState({
            selectedKey: key,
            selectedLabel: label
        });
        this.toggleDropdownState();
    }

    /**
     * Toggle dropdown state
     * Opens dropdown if closed, otherwise closes it
     */
    toggleDropdownState() {
        this.setState({
            dropdownOpened: !this.state.dropdownOpened
        });
    }

    /**
     * Renders one item of dropdown
     * @param key unique key of the item
     * @param item data of the item
     * @returns {XML} rendered component
     */
    renderDropdownItem(key, item) {
        return (
            <div className="dropdown__item" key={key} onClick={this.selectItem.bind(this, key, item.label)}>
                {item.label}
            </div>
        )
    }

    render() {
        const dropdownOptions = this.props.items.map((item, key) => (
            this.renderDropdownItem(key, item)
        ));

        return (
            <div className={this.state.dropdownOpened ? "dropdown dropdown_opened" : "dropdown"}>
                <div className="dropdown__active" key={this.state.selectedKey}
                     onClick={this.toggleDropdownState.bind(this)}>{this.state.selectedLabel}</div>
                <div className="dropdown__options">
                    {dropdownOptions}
                </div>
            </div>
        )
    }
}

Dropdown.propTypes = {
    items: PropTypes.array.isRequired
};

Dropdown.defaultProps = {
    selectedKey: null,
    selectedLabel: 'Select'
};

export default Dropdown;