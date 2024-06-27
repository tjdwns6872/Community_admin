import React from 'react';
import domainFunc from '../../service/ApiServer'

const Button = ({ buttonId, buttonClass, children, url }) => {
    return (
        <button id={buttonId} onClick={() => domainFunc.domainType('loacl', 'get', '/rest/adm/user/login', {userId:"tjdwns6872", userPw:"wjqfc227"})}>
            {children}
        </button>
    );
};

export default Button;