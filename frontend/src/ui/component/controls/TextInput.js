import React from 'react';

/**
 * Defines text input with some 
 * @param placeholder
 * @param text
 * @returns {XML}
 * @constructor
 */
const TextInput = ({ placeholder, text="" }) => {
    return (
        <div className="form-group">
            <input type="text" placeholder={placeholder} value={text} />
        </div>
    )
};

export default TextInput;