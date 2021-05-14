import React from 'react';
import Video from '../../images/firstpage.mp4';
import './App.css';


function Firstcontent() {
  return (
    <div>
      
      <div class="firstcontent ">
           <h1>Take care of you and yours at home, and we can take care of you online.</h1>
           <div class="firstcontentbutton">
           <button type="button" class="btn btn-light buttonsignup">Sign up for free</button>
           </div>
           <div class="videoclass">
          <video class="firstvideo" autoPlay loop muted>
              <source src={Video} type="video/mp4"/>
              </video> 
              </div>
            
      </div>
      <div class="businesssol">
        <p>Looking for PayPal Business Solutions? Whether you are freelancer or a business, we are here to support you.</p>
        <div class="businesssolbutton">
           <button type="button" class="btn btn-light buttonsignup2">PayPal for business</button>
           </div>
      </div>
      </div>

  );
}

export default Firstcontent;
