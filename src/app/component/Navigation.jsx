import React from 'react';
import {useSelector , useDispatch } from 'react-redux';
import './App.css';
import {useHistory } from 'react-router-dom';
import Loginclicked  from '../redux/loginaction';
function Navigation() {
  const dispatch = useDispatch();
  let history = useHistory();
  function Login()
  {
     console.log("login");
   
     history.push('/Screen2');
     console.log(history);
  }
  return (
    <section class="navi fixed-top">
      <div class="Header  w-100">
         
 <div className="container Navigation">
        <nav class="navbar navbar-expand-lg  navbar-light">
  <a class="navbar-brand paypalbrand" href="#">PayPal</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item  dropdown">
        <a class="nav-link links dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          INDIVIDUAL
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          BUSINESS
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          PARTNERS
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item lastnavitem dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          USEFUL INFO
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    
    </ul>
    <div class="row buttons">
      
      <button type="button" class="col-lg-4 btn btn-outline-primary login" onClick={()=>Login()}>Login</button>
      <button type="button" class="col-lg-4 btn btn-primary signup">Sign up</button>
      </div>  
    </div>
    
</nav>

  
  </div>
  
    </div>
    </section>
  );
}

export default Navigation;
