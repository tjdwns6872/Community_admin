import axios from 'axios';

const axiosFunc = {
    asynchronous(type, url, params, link){
        console.log(url);
        if(type === "get"){
            get(url, params, link);
        }
    }
}

function get(url, params='', link){
    var data = JSON.parse(params);
    axios.get(url,
        { params: data }
    ).then((resp)=>{
        console.log(resp.data)
        if(link !== ''){
            window.location.href = link;
        }
    }).catch((error)=>{
        console.log(error)
    })
}

export default axiosFunc;