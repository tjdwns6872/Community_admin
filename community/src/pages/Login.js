import React from 'react';
import Input from '../features/authentication/components/form/Input';
import Button from '../features/authentication/components/form/Button';

const Login = () => {
  return (
    <div id="login_layout">
      <p>가장 먼저 보여지는 로그인페이지입니다.</p>
      <Input inputName="userId" inputType="text"/>
      <Input inputName="userPw" inputType="password"/>
      <Button buttonId="btn login-btn" url="rest/adm/user/login">로그인</Button>
    </div>
  );
};

export default Login;