import loginSetting from "../service/login/Login";

const FunctionService = {
    Setting(data, fname){
        if(fname==='login'){
            loginSetting.sessionSetting(data);
        }
    }
}



export default FunctionService;