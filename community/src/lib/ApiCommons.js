import axios from 'axios';
import SessionSetting from '../features/authentication/service/session/Session';
import FunctionService from '../features/authentication/service/FunctionService';

const axiosFunc = {
    asynchronous(type, url, params, link, fname){
        if(type === "get"){
            get(url, params, link, fname);
        }
    }
}

function get(url, params='', link, fname){
    var data = JSON.parse(params);
    axios.get(url,
        { params: data }
    ).then((resp)=>{
        if(link !== ''){
            if(fname === 'login'){
                SessionSetting.sessionSave(resp.data);
            }
            //window.location.href = link;
        }
    }).catch((error)=>{
        console.log(error)
    })
}

export default axiosFunc;