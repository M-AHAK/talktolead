const Testcontact = () =>{
    return(
       <>
       <link rel="stylesheet" href="https://talk2lead.com/assets/css/intitelinput.css"></link>
    <link href="https://talk2lead.com/assets/css/contact-us/contact-us.css?=v02" rel="stylesheet"></link>
    <script src="https://talk2lead.com/assets/js/intitelinput-jquery.min.js"></script>
   
        <section class="sec-contact mt-5">
       
    <div class="container">
    <div class="row rtl mt-3">
        <div class="col-md-12 col-lg-6">
          <div class="contact-form">
            <h1><span>Contact us</span></h1>
              <p>Get in touch with us to discover our cost-effective, and business-oriented E-learning services</p>
            <p id="cntrepmsg"></p>
            <form action="/include-new/mainenquirysubmit/" id="maincontactinquiry" method="post">
              <div class="row">
                <div class="col-lg-6 col-6 pd-right">
                  <div class="forminput">
                    <input type="text" class="form-control" placeholder="First name" name="fname" id="cname" required=""/>
                  </div>
                </div>
                <div class="col-lg-6 col-6 pd-left">
                  <div class="forminput">
                    <input type="text" class="form-control" placeholder="Last name" name="lname" id="lname" required=""/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="forminput">
                    <input type="text" class="form-control" placeholder="Enter company" name="company" required=""/>
                  </div>
                </div>
                <div class="col-lg-6 col-6 pd-right">
                  <div class="forminput">
                    <input type="email" class="form-control" placeholder="Work email" name="cpemail" id="cemail" required=""/>
                  </div>
                </div>
                <div class="col-lg-6 col-6 pd-right"> 
                <div class="forminput">
				  <input type="tel" name="phone" id="phone" class="form-control" pattern="[0-9\-\(\) +]{5,22}" maxlength="10" placeholder="Enter phone Number" required="" autocomplete="off"/>
                  </div>
                  </div>
                  <div class="col-lg-12">
                  <div class="forminput">
                    <textarea name="cpmessage" class="form-control" id="ctext" rows="4" placeholder="Which services are you interested in?" required=""></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="checwbunal">
                    <div class="">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" required=""/>
                        <label class="form-check-label" for="gridCheck"> I agree to the <a href="https://talk2lead.com/terms-and-conditions/">Terms &amp; Condition</a> </label>
                      </div>
                      <div class="recaptchabg"> 
                        <div class="g-recaptcha" data-sitekey="6LegbssnAAAAAHEdso6zEAE1uetLPWY-uZn6DIyk"><div style={{width: '304px', height: '78px'}}><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LegbssnAAAAAHEdso6zEAE1uetLPWY-uZn6DIyk&amp;co=aHR0cHM6Ly93d3cudGFsazJsZWFkLmNvbTo0NDM.&amp;hl=en&amp;v=0hCdE87LyjzAkFO5Ff-v7Hj1&amp;size=normal&amp;cb=u0o8kj37d7rx" width="304" height="78" role="presentation" name="a-djjf9ie4wbsz" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style={{width: '250px', height: '40px',border: '1px solid rgb(193, 193, 193)', margin:' 10px 25px',padding: '0px', resize: 'none',display: 'none'}}></textarea></div><iframe style={{display: 'none'}}>
                        </iframe></div>
                      </div>
                      <div class=""> 
                        <input type="hidden" name="country_code" id="contact_country_code"/>
                        <input type="hidden" name="sample_for" value="talk2lead Blogs"/> 
                          <div class="btnallTp1"> <button type="submit" name="cbutton" id="contactFormButton">Send  Message <i class="mdi mdi-arrow-bottom-right"></i></button> </div>
                      </div>
                    </div>
                    <div class="trustedby"><img src="https://talk2lead.com/assets/images/trustedby.svg" class="img-fluid" alt="trustedby"/></div> 
                  </div> 
                </div>
              </div>
            </form>
          </div>
        </div> 
        <div class="col-md-12 col-lg-6"> 
            <div class="addressbg">
              <div class="address address1">
                <div class="addresshd"><span class="img"><img src="https://talk2lead.com/assets/images/contact-us/head-office.svg" class="img-fluid" alt="Head Office"/></span>
                  <div class="addresshdTxt">Head Office</div>
                  </div>
                  <p>H-54, Sector 63, Noida, Uttar Pradesh, India-201301</p>
                </div>
                <div class="address address1">
                <div class="addresshd"><span class="img"><img src="https://talk2lead.com/assets/images/contact-us/head-office.svg" class="img-fluid" alt="Registered Office"/></span>
                  <div class="addresshdTxt">Registered Office</div>
                  </div>
                  <p>30 N Gould St Ste R, Sheridan, WY, 82801</p>
                </div>
              </div> 
            
            <div class="salesTxbg">
            <div class="salesTx">
                <p>For Sales / Business Development</p>
                <div class="salesTxbg2">
                <div class="salesTx">
                <div class="salesTx1">
                <span class="plscon"><i class="mdi mdi-email"></i> Email</span>
                    <div class="salesTx2">
                    <div class="salesc1"><a href="mailto:info@talk2lead.com">info@talk2lead.com</a></div>
                    </div> 
                </div>
                    <div class="salesTx1">
                <span class="plscon"><i class="mdi mdi-phone"></i> Contact Number</span>
                    <div class="salesTx2">
                    <div class="salesc1 d-flex align-items-center"><span class="d-inline-block">AUS</span> <a href="tel:+61402749856"> +61-402749856</a></div>
                    <div class="salesc1 d-flex align-items-center"><span class="d-inline-block">US</span> <a href="tel:+17789518354">  +1-778-951-8354</a></div>
                    <div class="salesc1 d-flex align-items-center"><span class="d-inline-block">IN</span> <a href="tel:+917000530247">    +91-700-053-0247</a></div>
                    </div> 
                </div>
                </div> 
                <div class="salesImg">
                <span><img src="https://talk2lead.com/assets/images/contact-us/for-sales.png" class="img-fluid" alt="for-sales"/></span>
                </div>
                </div> 
            </div> 
        </div>
            
            <div class="salesTxbg">
            <div class="hrjobs">
                <p>For HR &amp; Job Opportunities</p>
                <ul>
                <li><i class="mdi mdi-email"></i> <a href="mailto:careers@talk2lead.com">careers@talk2lead.com</a></li>
                <li><i class="mdi mdi-phone"></i> <a href="tel:+918595110751"> +918595110751</a></li>
                </ul>
                  
            </div> 
        </div>
        </div>
      </div>
        </div>
          
    </section>

    <section class="sec client-icons">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="text-center">
               <p style={{ fontWeight: 'lighter'}}>Trusted by 500+ Companies Globally  </p>
            </div>
            <div class="owl-carousel owl-theme client-slider1 owl-loaded owl-drag">
               
               
               
               
               
               
            <div class="owl-stage-outer"><div class="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '3979px'}}><div class="owl-item active" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/axaiata.png" alt="axaiata" src="assets/images/axaiata.png" style={{opacity: '1'}}/>
             </div><div class="owl-item active" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/dayun.png" alt="dayun" src="assets/images/dayun.png" style={{opacity: '1'}}/>
               </div><div class="owl-item active" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/disco.png" alt="disco" src="assets/images/disco.png" style={{opacity: '1'}}/>
              </div><div class="owl-item active" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/feiyue.png" alt="feiyue" src="assets/images/feiyue.png" style={{opacity: '1'}}/>
               </div><div class="owl-item active" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/hasee.png" alt="hasee" src="assets/images/hasee.png" style={{opacity: '1'}}/>
              </div><div class="owl-item active" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image3.png" alt="image3" src="assets/images/image3.png" style={{opacity: '1'}}/>
               </div><div class="owl-item active" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image4.png" alt="image4" src="assets/images/image4.png" style={{opacity: '1'}}/>
               </div><div class="owl-item active" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image5.png" alt="image5" src="assets/images/image5.png" style={{opacity: '1'}}/>
               </div><div class="owl-item active" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image6.png" alt="image6" src="assets/images/image6.png"/>
               </div><div class="owl-item" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image7.png" alt="image7" src="assets/images/image7.png"/>
               </div><div class="owl-item" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image8.png" alt="image8" src="assets/images/image8.png"/>
               </div><div class="owl-item" style={{width: '135.751px', marginRight: '30px'}}> 
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image9.png" alt="image9" src="assets/images/image9.png"/>
              </div><div class="owl-item" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image10.png" alt="image10" src="assets/images/image10.png"/>
              </div><div class="owl-item" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image11.png" alt="image11" src="assets/images/image11.png"/>
              </div><div class="owl-item" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image12.png" alt="image12" src="assets/images/image12.png"/>
               </div><div class="owl-item" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image13.png" alt="image13" src="assets/images/image13.png"/>
               </div><div class="owl-item" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image14.png" alt="image14" src="assets/images/image14.png"/>
              </div><div class="owl-item" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image15.png" alt="image15" src="assets/images/image15.png"/>
              </div><div class="owl-item" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image16.png" alt="image16" src="assets/images/image16.png"/>
               </div><div class="owl-item" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image17.png" alt="image17" src="assets/images/image17.png"/>
              </div><div class="owl-item" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image18.png" alt="image18" src="assets/images/image18.png"/>
               </div><div class="owl-item" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image19.png" alt="image19" src="assets/images/image19.png"/>
               </div><div class="owl-item" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/image20.png" alt="image20" src="assets/images/image20.png"/>
               </div><div class="owl-item" style={{width: '135.751px', marginRight: '30px'}}>
                  <img class="owl-lazy img-fluid" data-src="https://talk2lead.com/assets/images/testimonail-logo/indofood.png" alt="indofood" src="assets/images/indofood.png"/>
               </div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots"><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot"><span></span></button></div></div>
         </div>
      </div>
   </div>
</section> 	  
	   


</>
    
   

    )
}
    export default Testcontact