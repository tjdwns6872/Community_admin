import domainFunc from './ApiServer';
import SessionFunc from './session/Session';

const FunctionService = {
    functionType(domain='', type='', url='', params='', link='', fname=''){
        if(params.length>0){
            params = FunctionService.parameterToJson(params);
        }
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
    },parameterToJson(params){
        var json={};
        params.forEach(data => {
            json[data]=FunctionService.tagInData(data);
        });
        return json
    },tagInData(key){
        var data = document.getElementsByName(key)[0].value;
        return data;
    }
}



export default FunctionService;