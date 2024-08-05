import Session from 'react-session-api';

const SessionSetting = {
    sessionSave(params){
        Session.set('userNo', params.result.data.userNo);
        Session.set('userRank', params.result.data.userRank);
    },sessionLoad(key){
        return Session.get(key);
    }
}

export default SessionSetting;