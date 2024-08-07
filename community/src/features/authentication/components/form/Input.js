import React from 'react';

const Input = ({ inputId, inputClass, inputName, inputType, value }) => {
    return (
        <input id={inputId} class={inputClass} type={inputType} name={inputName} value={value}/>
    );
  };
  
  export default Input;