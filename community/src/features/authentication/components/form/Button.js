import React from 'react';
import domainFunc from '../../service/ApiServer'

const Button = ({ buttonId, buttonClass, children, domain, type, url, params, link }) => {
    return (
        <button id={buttonId} onClick={() => domainFunc.domainType(domain, type, url, params, link)}>
            {children}
        </button>
    );
};

export default Button;