import axiosFunc from '../../../lib/ApiCommons'

const API_URL = "http://localhost:8080"

const domainFunc = {
    domainType(domain, type, url, params, link=''){
        if(domain === "loacl"){
            url = API_URL+url
        }
        if(link !== ''){
            axios(type, url, params, link);
        }else{
            axios(type, url, params);
        }
    }
}

function axios(type, url, params, link=''){
    axiosFunc.asynchronous(type, url, params, link)
}


export default domainFunc;