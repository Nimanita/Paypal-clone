import React from 'react';
import {useSelector , useDispatch } from 'react-redux';
import Submit from '../redux/loginaction';
import {useHistory } from 'react-router-dom';
import {useState , useEffect} from 'react';
import {connect} from "react-redux";
import Navigation from './Navigation';
import './App.css';
function Login(props) {
  let history = useHistory();
  const [ logindata,changedata] = useState({
      username : ' ',
      password : ' '
  })
  const [Alertclass , changeclass] = useState("alert   alert-danger  fade");
  const [flag ,setflag] = useState(0);
  
 
  if(props.auth === 'true')
  {
    
    history.push('/Successlogin');
  }
  else if(props.auth === 'false' && flag === 1)
  {
     
      changeclass("alert  alert-danger show");
      setflag(0);
    
  }

 /* if(props.auth === 'false' && flag === 1)
  {
     console.log(props.auth , "flag" , flag);
     console.log(Alertclass , "alert");
     if(Alertclass === "alert alert-warning alert-dismissible fade")
     {
      changeclass("alert alert-warning alert-dismissible fade show");
     }
     else
     {
       console.log("elsecondition",Alertclass);
     }
      history.push('/Screen2');
  }*/
  function submitclick()
  {
     
    setflag(1);
    
      dispatch(Submit(logindata));
      
    
  
    
     
  }
  function handleChange(e)
  {
    changeclass("alert  alert-danger fade");
      if(e.target.id ==='x1')
      {
         changedata(
             {
            ...logindata ,
            username : e.target.value
             }
         ) ;
          

      }
      else if(e.target.id === 'x2')
      {
        changedata(
            {
           ...logindata ,
           password : e.target.value
            }
        ) ;
      }
  }
  const username = useSelector(state=>state.username);
  const password = useSelector(state=>state.password);
  
  const dispatch = useDispatch()
 

  console.log("return",Alertclass)  ;
  return (
   
   <div>
     <Navigation/>
    <div className="container App loginbox">
      <div class="row justify-content-center detailsrow">
       <h1 class="detailtitle">ENTER THE LOGIN DETAILS</h1>
       </div>
       <div class = "row justify-content-center">
        <div class="col-lg-12 inputs">
           <h2 class="details">USERNAME</h2>
            <input id="x1"  class="inputbox" text="USERNAME" onChange={handleChange} />
        </div>   
        
       </div>
       <div class = "row justify-content-center">
        <div class=" input2 inputs col-lg-12">
        <h2 class="details">PASSWORD</h2>
            <input id="x2" class="inputbox" onChange={handleChange} />
        </div>   
        
       </div>
       <button type="button" class="col-lg-4 btn btn-primary login submit" onClick={()=>submitclick()}>SUBMIT</button>
    </div>
    <div class={Alertclass} role="alert">
  <strong>Wrong password or username!!!</strong> 
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    </div>
  );
}
Login = connect(mapStateToProps)(Login);
function mapStateToProps(state){
  
  return {
   
      auth: state.success
  }
}
export default Login;
