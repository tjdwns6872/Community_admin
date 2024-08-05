import domainFunc from './ApiServer';

const FunctionService = {
    functionType(domain='', type='', url, params, link, fname){
        if(domain !== ''){
            domainFunc.domainType(domain, type, url, params, link, fname);
        }
    }
}



export default FunctionService;