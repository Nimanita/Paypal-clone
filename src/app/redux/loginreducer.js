

const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'
const REQUEST ='REQUEST'
const initialState = {

    username : 'username ',
    password : 'password',
    success : 'false',
    email : 'email',
    id : 'id',
    last_updated:'sh',
    name : "name"
}
const loginreducer = (state = initialState,action)=>{
  console.log("action",action,action.name,action.id);
 
switch(action.type){
  case SUCCESS : console.log("success"); 
  return{
     

      
      success : 'true',
      name : action.name,
      id : action.id,
      email:action.email,
      last_updated:action.lastedited
    
  }
  case FAILURE : console.log("fail");return{
      ...state ,
      password : "failed"
  }

  case REQUEST :console.log("request");return{
    ...state ,
    username : "ACCESSED"
}
  
  default : return state
}

}

export default loginreducer