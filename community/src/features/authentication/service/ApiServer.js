import axiosFunc from '../../../lib/ApiCommons'

const API_URL = "http://localhost:8080"

const domainFunc = {
    domainType(domain, type, url, data){
        if(domain === "loacl"){
            url = API_URL+url
        }
        axios(type, url, data);
    }
}

function axios(type, url, data){
    axiosFunc.asynchronous(type, url, data)
}


export default domainFunc;