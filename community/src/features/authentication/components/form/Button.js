import React from 'react';

const Button = ({ buttonId, buttonClass, children, domain, type, url, params, link, fname }) => {
    return (
        <button id={buttonId} class={buttonClass}>
            {children}
        </button>
    );
};

export default Button;