import React from 'react';

/**
 *
 * @param label
 * @returns {XML}
 * @constructor
 */
const Button = ({ label }) => {
    return (
        <button type="button" className="button button_primary">{label}</button>
    )
};

export default Button;