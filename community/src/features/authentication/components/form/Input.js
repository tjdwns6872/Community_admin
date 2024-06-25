import React from 'react';

const Input = ({ inputId, inputClass, inputName, inputType, children }) => {
    return (
        <input type={inputType} name={inputName}/>
    );
  };
  
  export default Input;