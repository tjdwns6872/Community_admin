import React from 'react';
import functionModules from '../features/authentication/service/Function';

const home = () => {
  functionModules.ajaxFunction({});
  return (
    <div id="home_layout">
        <p>홈 화면입니다.</p>
    </div>
  );
};

export default home;