import React from 'react';

const Button = ({ buttonId, buttonClass, children }) => {
    return (
        <button id={buttonId}>
            {children}
        </button>
    );
  };
  
  export default Button;