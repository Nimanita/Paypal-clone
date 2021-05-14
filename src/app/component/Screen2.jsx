import React from 'react';

import './App.css';
import Feature from './Feature';
import {useSelector , useDispatch } from 'react-redux';
import Login from './Login';

function Screen2() {
  
  return (
    <div className="Screen">
      
     <Login/>
    </div>
  );
}

export default Screen2;
