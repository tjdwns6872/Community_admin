import React from 'react';

const Button = ({ buttonId, buttonClass, children}) => {
    return (
        <button id={buttonId} class={buttonClass}>
            {children}
        </button>
    );
};

export default Button;