import React from 'react';
import axios from 'axios';

const Button = ({ buttonId, buttonClass, children, url }) => {
    return (
        <button id={buttonId} onClick={()=>{
            axios.get('http://localhost:8080/rest/adm/user/login').then((result)=>{
                console.log(result)
            })
        }}>
            {children}
        </button>
    );
  };
  
  export default Button;