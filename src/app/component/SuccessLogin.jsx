import React from 'react';
import NavigationLogin from './NavigationLogin';
import Sidebar from './Sidebar';
import './App.css';
import Myaccount from './Myaccount';
import Login from './Login';
function SuccessLogin() {
  
  return (
    <div className="SuccessLogin">
      <div class="row successrow">
        <Sidebar/>
      <NavigationLogin/>
      <Myaccount/>
      </div>
   
    </div>
  );
}

export default SuccessLogin;
