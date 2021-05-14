import React from 'react';
import {useSelector , useDispatch } from 'react-redux';
import './App.css';
import {useHistory } from 'react-router-dom';
import Loginclicked  from '../redux/loginaction';
import Shop from '../../images/shopping.png';
function NavigationLogin() {
  const dispatch = useDispatch();
  let history = useHistory();
  function Login()
  {
     console.log("login");
   
     history.push('/Screen2');
     console.log(history);
  }
  return (
    <section class="navi successloginnavi fixed-top">
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
    <div class="d-flex flexrow buttons">
      
      <button type="button" class="w-25 btn btn-outline-primary login" onClick={()=>Login()}>Logout</button>
     </div>
    
    </div>
    
</nav>

  
  </div>
  
    </div>
    </section>
  );
}

export default NavigationLogin;
