import { bindActionCreators } from 'redux';

const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'
const REQUEST ='REQUEST'
const axios = require('axios');


//var data = '{"login_id":"satyajeet@determinantstudios.com", "password":"satya.12345"}';
//var url = "https://cors-anywhere.herokuapp.com/https://api.anuparamanu.xyz/api/v1/login";
//const url= 'https://api.anuparamanu.xyz/api/v1/login';

function success(datas)
{
    return{
        type : SUCCESS,
        name : datas.name,
        id : datas.id,
        email :datas.email,
        lastedited : datas.updated_at
    }
}
function failure()
{
    return{
        type : FAILURE
    }
}
function request()
{
    return{
        type : REQUEST
    }
}
  const Submit = (logindata) =>{
     /* console.log(logindata);*/
     var data = { 
        login_id:logindata.username, 
        password:logindata.password
    }
     var config = {
    method: 'post',
    url: 'https://api.anuparamanu.xyz/api/v1/login',
    data : data,
    
     headers: { 
      'X-AuthorityToken': 'auth-postman'
     }
   
   
};

      /*console.log(logindata.username , logindata.password);
    return{
        type: SUBMIT,
        user : logindata.username,
        pass : logindata.password
     
    }*/
    //data = logindata
    return function(dispatch){
        dispatch(request())

        /*fetch("https://api.anuparamanu.xyz/api/v1/sample", requestOptions).then(result=>
            //const user = result.data;//.map(response=>user)
            console.log("response data",result)
         //dispatch(success(user))
         //console.log("final state10",store.getState())
        )
        .catch( error=>{
            dispatch(failure(error.message))

        })*/
       /*axios.post(
           url,
           data,
           {
             headers: { 
                'X-AuthorityToken': 'auth-postman',
              }
           }
       )*/
axios(config)
 .then(function (response) {

  console.log(response.data);
  console.log(response.data.email);
  console.log(response.data.id);
  console.log(response.data.name);
  console.log(response.data.updated_at);
  dispatch(success(response.data))
})
 .catch(function (error) {
    dispatch(failure())
  console.log(error);
});
console.log("submit reacged");
    }
}
export default Submit;
