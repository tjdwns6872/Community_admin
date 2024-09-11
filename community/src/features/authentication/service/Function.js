import axios from 'axios';

var functionModules = {
    ajaxFunction:function(data){
        axios.get('http://localhost:3001/api/hello', data)
        .then(response => {
            console.log(response.data); // 서버로부터 받은 데이터 출력
        })
        .catch(error => {
            console.error('Error posting data:', error); // 에러 핸들링
        });
    }
}

export default functionModules;