import React from 'react';
import Navigation from './Navigation';
import Firstcontent from './Firstcontent';
import Sidebar from './Sidebar';
import './App.css';
import Feature from './Feature';
import {useSelector , useDispatch } from 'react-redux';
function Screen() {
  const routes = useSelector(state=>state.route);
  console.log(routes);
  return (
    <div className="Screen">
    <Navigation/>
    
    <Firstcontent/>
    <Feature/>
    </div>
  );
}

export default Screen;
