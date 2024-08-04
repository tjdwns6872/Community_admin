import axiosFunc from '../../../lib/ApiCommons'

const API_URL = "http://localhost:8080"

const domainFunc = {
    domainType(domain='', type, url, params, link='', fname=''){
        if(domain === "loacl"){
            url = API_URL+url
        }
        if(link !== ''){
            axios(type, url, params, link, fname);
        }else{
            axios(type, url, params, fname);
        }
    }
}

function axios(type, url, params, link='', fname){
    axiosFunc.asynchronous(type, url, params, link, fname)
}


export default domainFunc;