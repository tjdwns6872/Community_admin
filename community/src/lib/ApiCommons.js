import axios from 'axios';
import SessionFunc from '../features/authentication/service/session/Session';

const axiosFunc = {
    asynchronous(type, url, params, link, fname){
        if(type === "get"){
            get(url, params, link, fname);
        }
    }
}

function get(url, params='', link, fname){
    axios.get(url,
        { params: params }
    ).then((resp)=>{
        if(link !== ''){
            if(fname === 'login'){
                SessionFunc.sessionSave(resp.data);
            }
            window.location.href = link;
        }
    }).catch((error)=>{
        console.log(error)
    })
}

export default axiosFunc;