import axios from 'axios';

const axiosFunc = {
    asynchronous(type, url, data){
        if(type === "get"){
            get(url, data);
        }
    }
}

function get(url, data=''){
    axios.get(url,
        { params: data }
    ).then((resp)=>{
        console.log(resp.data)
    }).catch((error)=>{
        console.log(error)
    })
}

export default axiosFunc;