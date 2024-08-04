import React from 'react';
import FunctionService from '../../service/FunctionService';

const Button = ({ buttonId, buttonClass, children, domain, type, url, params, link, fname }) => {
    return (
        <button id={buttonId} onClick={() => FunctionService.functionType(domain, type, url, params, link, fname)}>
            {children}
        </button>
    );
};

export default Button;