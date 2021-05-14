import React from 'react';
import {useSelector , useDispatch } from 'react-redux';
import {connect} from "react-redux";
import {useState , useEffect} from 'react';

import './App.css';
function Myaccount(props) {
 
  
  const name = useSelector(state=>state.name);
  const id = useSelector(state=>state.id);
  const email = useSelector(state=>state.email);
  const edited = useSelector(state=>state.last_updated);
  
  const dispatch = useDispatch()
 console.log(name);
  
  return (
   
    <div className="container Myaccount">
      <div class="accountbox">
      <div class="row myaccountrow justify-content-center">
        <h1>Name : {name}</h1>
      </div>
      <div class="row myaccountrow justify-content-center">
        <h1>ID : {id}</h1>
      </div>
      <div class="row myaccountrow justify-content-center">
        <h1>Email : {email}</h1>
      </div>
      <div class="row myaccountrow justify-content-center">
        <h1>Last Edited : {edited}</h1>
      </div></div>
    </div>
    
  );
}

export default Myaccount;
