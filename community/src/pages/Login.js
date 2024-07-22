import React from 'react';
import Input from '../features/authentication/components/form/Input';
import Button from '../features/authentication/components/form/Button';

const Login = () => {
  return (
    <div id="login_layout">
      <Input inputName="userId" inputType="text"/>
      <Input inputName="userPw" inputType="password"/>
      <Button buttonId="btn login-btn" domain='loacl' type='get' url="/rest/adm/user/login" params='{"userId":"tjdwns6872", "userPw":"wjqfc227"}' link='/'>로그인</Button>
    </div>
  );
};

export default Login;