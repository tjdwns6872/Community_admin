import Session from 'react-session-api';

const loginSetting = {
    sessionSetting(resp){
        console.log(resp);
        var data = resp.result.data;
        Session.set("userId", data.userNo);
        Session.set("userRank", data.userRank);
        loginSetting.sessionLoad();

    },sessionLoad(){
        console.log(Session.get("userId"));
        console.log(Session.get("userRank"));
    }
}

export default loginSetting;