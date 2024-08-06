import domainFunc from './ApiServer';
import SessionFunc from './session/Session';

const FunctionService = {
    functionType(domain='', type='', url='', params='', link='', fname=''){
        if(domain !== ''){
            domainFunc.domainType(domain, type, url, params, link, fname);
        }else{
            if(fname==='test'){
                var test = SessionFunc.sessionLoad('userData');
                console.log(test);
            }else if(fname==='logout'){
                SessionFunc.sessionRemove('userData');
                window.location.href = link;
            }
        }
    }
}



export default FunctionService;