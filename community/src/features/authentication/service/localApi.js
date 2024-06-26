import React from 'react';
import axios from 'axios';

const API_URL = "http://localhost:8080/"

const api = {
    asynchronous(type, url, data){
        get(url, data);
    }
}

export function get(url, data=''){
    axios.get(API_URL+url,
        { params: {
                userId:"tjdwns6872",
                userPw:"wjqfc227"
            }
        }
    ).then((resp)=>{
        console.log(resp.data)
    })
}

export default api;