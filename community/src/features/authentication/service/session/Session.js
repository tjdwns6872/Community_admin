// import Session from 'react-session-api';

const SessionFunc = {
    //세션 저장(코드 수정 필요 정적->동적)
    sessionSave(params){
        // Session.set('userNo', params.result.data.userNo);
        // Session.set('userRank', params.result.data.userRank);
        var userData = {"userNo": params.result.data.userNo, "userRank":params.result.data.userRank};
        sessionStorage.setItem('userData', JSON.stringify(userData));
        // var userNo = document.getElementById('userNo');
        // userNo.append(SessionFunc.sessionLoad('userData'));
    },
    //저장된 세션 불러오기
    sessionLoad(key){
        //return Session.get(key);
        return sessionStorage.getItem(key);
    },
    //저장된 세션 삭제
    sessionRemove(key){
        sessionStorage.removeItem(key);
    }
}

export default SessionFunc;