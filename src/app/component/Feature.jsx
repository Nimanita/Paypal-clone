import React from 'react';
import Shop from '../../images/shopping.png';
import './App.css';
import Fly from '../../images/fly.webp';
import Dress from '../../images/Dress.gif';
import Mobile from '../../images/mobilepay.webp';
import Conf from '../../images/confidence.webp';
function Feature() {
  return (
    <div class="Feature">
      <div class="container">
        <div class="row feature1">
        <div class="col-lg-6 details">
           <h1>The world is your shopping mall</h1>
           <p>From big brands to little boutiques, you can shop safely at millions of online stores with PayPal.</p>
           
           <div class="shopbutton">
           <button type="button" class="btn btn-light shopbtn">Shop Now</button>
           </div>
         </div>
        
         <div class="col-lg-6 images">
           <img src={Shop} class="shopimg"></img>
           </div>
      </div>
      </div>
      <section class="feature2">
      <div class="row feature1 ">
      <div class="col-lg-6  images">
           <img src={Fly} class="shopimg"></img>
           </div>
        <div class="col-lg-6 details feature2details">
           <h1>Fly through checkout securely</h1>
           <p>Checkout online and in apps in seconds. Whether shopping at your usual store or buying old essentials somewhere new, PayPal helps keep checkout fast and your purchase protected</p>
           
           <div class="shopbutton">
           <button type="button" class="btn btn-light shopbtn">Checkout With One Touch™</button>
           </div>
         </div>
        
         
      </div>
      </section>
      <div class="container">
        <div class="row feature1">
        <div class="col-lg-6 details">
           <h1>Returning a purchase? Get shipping refunded.</h1>
           <p>When you return a purchase you bought with PayPal, you can get your return shipping costs*** refunded.</p>
           
           <div class="shopbutton">
           <button type="button" class="btn btn-light shopbtn">Learn More</button>
           </div>
         </div>
        
         <div class="col-lg-6 images">
           <img src={Dress} class="shopimg"></img>
           </div>
      </div>
      </div>
      <section class="feature2">
      <div class="row feature1 ">
      <div class="col-lg-6  images">
           <img src={Mobile} class="shopimg"></img>
           </div>
        <div class="col-lg-6 details feature2details">
           <h1>Pay it the way you want</h1>
           <p>Link all your credit and debit cards and choose which one to use at checkout. Shopping online has never been this easy.</p>
           <div class="shopbutton">
           <button type="button" class="btn btn-light shopbtn">Link your preferred card</button>
           </div>
         </div>
        
         
      </div>
      </section>
      <div class="container">
        <div class="row feature1">
        <div class="col-lg-6 details">
           <h1>Shop online with confidence</h1>
           <p>Stay more secure when shopping online – with 24/7 fraud monitoring, Buyer Protection*, and refund on return shipping costs*** on us. Terms apply.</p>
           
           <div class="shopbutton">
           <button type="button" class="btn btn-light shopbtn">Find out More</button>
           </div>
         </div>
        
         <div class="col-lg-6 images">
           <img src={Conf} class="shopimg"></img>
           </div>
      </div>
      </div>
      </div>

  );
}

export default Feature;
