import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel'), { ssr: false });
const Testhomecarousal = () => {
    return(
        <>

     <section class="banner-home-sec">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="carousel">
        {/* <OwlCarousel
key={Math.random()}
// items={(props.dataB.books.length>0)?props.dataB.books.length:3}
className="owl-theme meetSlider"
loop
autoplay={false}
// items={1}
dots={true}
center={true}
nav

margin={10}
responsive= {{
0: {
items: 1,
},
600: {
items: 1,
},
1000: {
items: 1,
},
}}
>  */}
          <div class="tile">
            <div class="banner-home slid-1 align-items-center">
              <div class="banner-home-img">
                <div class="">
                  
                    <img fetchpriopity="high" src="assets/images/lead-generating-solutions-first-image.png" alt="lead generating solutions" class="img-fluid" width="546" height="525"/> 
                </div>
              </div>
              <div class="banner-home-text banner-text">
                <div class="banner-hd-top">Lead-generating solutions </div>
                <div class="bnrhd-text">Talk only to your potential buyers and achieve high-speed sales </div>
                <div class="bannerperaimg">
                  <p>We help industry leaders with the most common goal among business owners is to generate leads and drive more sales.</p>
                 
                </div>
                <div class="btnallTp1"> <a href="/contact-us/">Let's Close Deals <i class="mdi mdi-arrow-bottom-right"></i></a> </div>
              </div>
            </div>
          </div>
          <div class="tile">
            <div class="banner-home slid-3">
              <div class="banner-home-img">
                <div class="">
                 
                    <img fetchpriopity="high" src="https://talk2lead.com/assets/images/homepage/2.webp" alt="Higher Education Services" class="img-fluid" width="471" height="361"/> 
                </div>
              </div>
              <div class="banner-home-text banner-text">
                <div class="banner-hd-top">Search Engine Optimization</div>
                <div class="bnrhd-text">Rank your business in the top searches to boost traffic </div>
                <div class="bannerperaimg">
                  <p>We assist companies in achieving their primary objective, which is to generate leads and increase sales, through effective Search Engine Optimization strategies.</p>
                 
                </div>
                <div class="btnallTp1"> <a href="https://www.talk2lead.com/contact-us/">Start Ranking <i class="mdi mdi-arrow-bottom-right"></i></a> </div>
              </div>
            </div>
          </div>
          <div class="tile">
            <div class="banner-home step-4">
              <div class="banner-home-img">
                <div class="">
                  
                    <img fetchpriopity="high" src="https://talk2lead.com/assets/images/homepage/3.webp" alt="Corporate eLearning Solutions" class="img-fluid" w width="481" height="401"/> 
                </div>
              </div>
              <div class="banner-home-text banner-text">
                <div class="banner-hd-top">Social Media Optimization </div>
                <div class="bnrhd-text">Expand your online footprints on social media platforms to increase your presence </div>
                <p>We help businesses to assess, monitor, and alter their content to conform to social media best practices to spread their wings, through effective social media optimization strategies.</p>
                <div class="btnallTp1"> <a href="https://www.talk2lead.com/contact-us/">Spread your wings <i class="mdi mdi-arrow-bottom-right"></i></a> </div>
              </div>
            </div>
          </div> 
		  <div class="tile">
            <div class="banner-home step-4">
              <div class="banner-home-img">
                <div class="">
                 <img fetchpriopity="high" src="https://talk2lead.com/assets/images/homepage/4.webp" alt="Corporate eLearning Solutions" class="img-fluid" width="403" height="424"/>
                </div>
              </div>
              <div class="banner-home-text banner-text">
                <div class="banner-hd-top">Pay-Per-Click</div>
                <div class="bnrhd-text">Achieve marketing goals, other than just profits </div>
                <p>We assist businesses in achieving their marketing goals not just limited to brand exposure, leads, content downloads, contests, newsletter sign-ups, website traffic, and conversions.</p>
                <div class="btnallTp1"> <a href="https://www.talk2lead.com/contact-us/">Let’s Go!’ <i class="mdi mdi-arrow-bottom-right"></i></a> </div>
              </div>
            </div>
          </div>
          {/* </OwlCarousel> */}
        </div>
      </div>
    </div>
  </div>


  <ul class="slick-dots" ><li class="slick-active"><button type="button" aria-current="true"><span class="slick-dot-icon" aria-hidden="true"></span><span class="slick-sr-only">Go to slide 1</span></button></li><li><button type="button"><span class="slick-dot-icon" aria-hidden="true"></span><span class="slick-sr-only">Go to slide 2</span></button></li><li><button type="button"><span class="slick-dot-icon" aria-hidden="true"></span><span class="slick-sr-only">Go to slide 3</span></button></li><li><button type="button"><span class="slick-dot-icon" aria-hidden="true"></span><span class="slick-sr-only">Go to slide 4</span></button></li></ul>
</section>

 
  {/* <section class="sec client-icons">
   <div class="container">
      <div className="row">
        <div className="col-md-12">
        <div class="text-center">
               <p>Trusted by 500+ Companies Globally</p>
            </div> */}
        {/* <div className="sliderClient-icon">
         <ul>
          <li><img src="assets/images/image14.png" className="img-fluid" alt="logo"/></li>
          <li><img src="assets/images/image13.png" className="img-fluid" alt="logo"/></li>
          <li><img src="assets/images/image12.png" className="img-fluid" alt="logo"/></li>
          <li><img src="assets/images/image11.png" className="img-fluid" alt="logo"/></li>
          <li><img src="assets/images/image10.png" className="img-fluid" alt="logo"/></li>
          <li><img src="assets/images/image9.png" className="img-fluid" alt="logo"/></li>
          <li><img src="assets/images/image8.png" className="img-fluid" alt="logo"/></li>
          <li><img src="assets/images/image7.png" className="img-fluid" alt="logo"/></li>
          <li><img src="assets/images/image6.png" className="img-fluid" alt="logo"/></li>
          <li><img src="assets/images/image5.png" className="img-fluid" alt="logo"/></li>
         </ul> 
         </div> */}




{/* 
        </div>


      </div>
      </div> 
</section>  */}

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
	 

<section class="sec testimonail-sec">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="hding2 text-center">
            <h2>Our impact in their words</h2>
          </div>
        </div>
        <div class="col-md-12 p-0 slider-bgn1">
          <div class="owl-carousel owl-theme slider-testimonail owl-loaded">
            
          <div class="owl-stage-outer owl-height" style={{height: "275.573px"}}><div class="owl-stage" style={{transition: "all 0s ease 0s", width: "11634px", transform: "translate3d(374px, 0px, 0px)"}}><div class="owl-item active center" aria-hidden="false" style={{width: "750.995px", marginRight: "80px"}}><div class="item">
              <div class="mnialstrt">
                <div class="mnialtext text-center">
                  <div class="main-content2">
                    <p>Your lead generation service has transformed the way we connect with potential clients. Now we can focus on engaging with genuinely interested prospects, leading to higher conversion rates. </p>
                  </div>
                  <div class="main-content">
                    <p>Your lead generation service has transformed the way we connect with potential clients. Now we can focus on engaging with genuinely interested prospects, leading to higher conversion rates. </p>
                  </div>
                </div>
               <ul class="mnialicon mnc1">
                      <li class="mnialname">Sam Josh</li>
                       <li class="mnialdgnation">Marketing Director</li>
                       <li class="mnialclien-img"> 
					   
<img fetchpriopity="high" src="assets/images/image1.png" alt="image1" class="img-fluid" width="480" height="270"/>

					   </li>
                      </ul>
              </div>
            </div></div><div class="owl-item active" aria-hidden="true" style={{width: "750.995px", marginRight: "80px"}}><div class="item">
              <div class="mnialstrt">
                <div class="mnialtext text-center">
                  <div class="main-content2">
                    <p>Thanks to your solution,IBM. We no longer waste time chasing dead-end leads. Your leads have enabled us to target the right audience and maximize our sales efforts.</p>
                  </div>
                  <div class="main-content">
                    <p>Thanks to your solution,IBM. We no longer waste time chasing dead-end leads. Your leads have enabled us to target the right audience and maximize our sales efforts.</p>
                  </div>
                </div>
                <ul class="mnialicon mnc1">
                       <li class="mnialname">Martin Luther </li>
                       <li class="mnialdgnation">Sales Manager </li> 
                       <li class="mnialclien-img">
<img fetchpriopity="high" src="assets/images/image2.png" class="img-fluid" alt="image2" width="124" height="39"/>
</li> 
                      </ul>
              </div>
            </div></div><div class="owl-item" aria-hidden="true" style={{width: "750.995px", marginRight: "80px"}}><div class="item">
              <div class="mnialstrt">
                <div class="mnialtext text-center">
                  <div class="main-content2">
                    <p>Our sales team is more efficient than ever, thanks to your services. We're connecting with qualified leads and closing deals faster. </p>
                  </div>
                  <div class="main-content">
                    <p>Our sales team is more efficient than ever, thanks to your services. We're connecting with qualified leads and closing deals faster. </p>
                  </div>
                </div>
                <ul class="mnialicon mnc1">  
                   <li class="mnialname">Julie Smith </li>
                       <li class="mnialdgnation">Head of Marketing </li> 
                       <li class="mnialclien-img">
<img fetchpriopity="high" src="assets/images/image3.png" class="img-fluid" alt="Polo" width="124" height="39"/>
</li> 
                </ul>
              </div>
            </div></div><div class="owl-item" aria-hidden="true" style={{width: "750.995px", marginRight: "80px"}}><div class="item">
              <div class="mnialstrt">
                <div class="mnialtext text-center">
                  <div class="main-content2">
                    <p>Your service has taken the guesswork out of lead generation for us. We're now focusing on quality interactions with potential clients, thanks to your expertise.  </p>
                  </div>
                  <div class="main-content">
                    <p>Your service has taken the guesswork out of lead generation for us. We're now focusing on quality interactions with potential clients, thanks to your expertise.  </p>
                  </div>
                </div>
               <ul class="mnialicon mnc1">  
                   <li class="mnialname">Maria </li>
                       <li class="mnialdgnation">Marketing President</li> 
                       <li class="mnialclien-img">
<img fetchpriopity="high" src="assets/images/image4.png" class="img-fluid" alt="image4" width="124" height="39"/>
</li> 
                </ul>
              </div>
            </div></div><div class="owl-item" aria-hidden="true" style={{width: "750.995px", marginRight: "80px"}}><div class="item">
              <div class="mnialstrt">
                <div class="mnialtext text-center">
                  <div class="main-content2">
                    <p>We've seen a remarkable improvement in our lead-to-customer conversion rates since partnering with you. Your lead generation practices are a game-changer.   </p>
                  </div>
                  <div class="main-content">
                    <p>We've seen a remarkable improvement in our lead-to-customer conversion rates since partnering with you. Your lead generation practices are a game-changer.   </p>
                  </div>
                </div>
               <ul class="mnialicon mnc1">  
                   <li class="mnialname">Rosia   </li>
                       <li class="mnialdgnation">Sales Manager </li> 
                       <li class="mnialclien-img">
<img fetchpriopity="high" src="assets/images/image5.png" class="img-fluid" alt="toto" width="124" height="39"/>
</li> 
                </ul>
              </div>
            </div></div><div class="owl-item" aria-hidden="true" style={{width: "750.995px", marginRight: "80px"}}><div class="item">
              <div class="mnialstrt">
                <div class="mnialtext text-center">
                  <div class="main-content2">
                    <p>Our sales pipeline is thriving, all thanks to your solutions . Your expertise has saved us time and effort while driving tangible results. </p>
                  </div>
                  <div class="main-content">
                    <p>Our sales pipeline is thriving, all thanks to your solutions. Your expertise has saved us time and effort while driving tangible results. </p>
                  </div>
                </div>
               <ul class="mnialicon mnc1">  
                   <li class="mnialname">Willson James  </li>
                       <li class="mnialdgnation">Head of Marketing Department </li> 
                       <li class="mnialclien-img">
<img fetchpriopity="high" src="assets/images/image6.png" class="img-fluid" alt="sagawa" width="124" height="39"/>
</li> 
                </ul>
              </div>
            </div></div><div class="owl-item" aria-hidden="true" style={{width: "750.995px", marginRight: "80px"}}><div class="item">
              <div class="mnialstrt">
                <div class="mnialtext text-center">
                  <div class="main-content2">
                    <p>You have allowed us to engage with the right prospects at the right time. The impact on our bottom line has been impressive.  </p>
                  </div>
                  <div class="main-content">
                    <p>You have allowed us to engage with the right prospects at the right time. The impact on our bottom line has been impressive.  </p>
                  </div>
                </div>
               <ul class="mnialicon mnc1">  
                   <li class="mnialname">Lauren John  </li>
                       <li class="mnialdgnation">Senior Manager Sales</li> 
                       <li class="mnialclien-img">
<img fetchpriopity="high" src="assets/images/image7.png" class="img-fluid" alt="calbee" width="124" height="39"/>
</li> 
                </ul>
              </div>
            </div></div><div class="owl-item" aria-hidden="true" style={{width: "750.995px", marginRight: "80px"}}><div class="item">
              <div class="mnialstrt">
                <div class="mnialtext text-center">
                  <div class="main-content2">
                    <p>We're achieving our sales goals more consistently, thanks to your tailored lead generation strategies. Your service has been instrumental in our success. </p>
                  </div>
                  <div class="main-content">
                    <p>We're achieving our sales goals more consistently, thanks to your tailored lead generation strategies. Your service has been instrumental in our success. </p>
                  </div>
                </div>
                <ul class="mnialicon mnc1">  
                   <li class="mnialname">Cassandra Smith </li>
                       <li class="mnialdgnation">Senior Manager Marketing</li> 
                       <li class="mnialclien-img">
<img fetchpriopity="high" src="assets/images/image8.png" class="img-fluid" alt="richo" width="124" height="39"/>
</li> 
                </ul>
              </div>
            </div></div><div class="owl-item" aria-hidden="true" style={{width: "750.995px", marginRight: "80px"}}><div class="item">
              <div class="mnialstrt">
                <div class="mnialtext text-center">
                  <div class="main-content2">
                    <p>Your service has streamlined our lead acquisition process, enabling us to allocate resources effectively. Our team now focuses on promising leads, thanks to your B2B lead generation.  </p>
                  </div>
                  <div class="main-content">
                    <p>Your service has streamlined our lead acquisition process, enabling us to allocate resources effectively. Our team now focuses on promising leads, thanks to your B2B lead generation.  </p>
                  </div>
                </div>
               <ul class="mnialicon mnc1">  
                   <li class="mnialname">Samuel Martin  </li>
                       <li class="mnialdgnation">Senior Director Sales</li> 
                       <li class="mnialclien-img">
<img fetchpriopity="high" src="assets/images/image9.png" class="img-fluid" alt="omrom" width="124" height="39"/>
</li> 
                </ul>
              </div>
            </div></div><div class="owl-item" aria-hidden="true" style={{width: "750.995px", marginRight: "80px"}}><div class="item">
              <div class="mnialstrt">
                <div class="mnialtext text-center">
                  <div class="main-content2">
                    <p>Your lead generation solutions have exceeded our expectations. We're connecting with prospects who genuinely want our services, leading to a higher closing rate.  </p>
                  </div>
                  <div class="main-content">
                    <p>Your lead generation solutions have exceeded our expectations. We're connecting with prospects who genuinely want our services, leading to a higher closing rate.  </p>
                  </div>
                </div>
               <ul class="mnialicon mnc1">  
                   <li class="mnialname">Swiss Johnson </li>
                       <li class="mnialdgnation">Director</li> 
                       <li class="mnialclien-img">
<img fetchpriopity="high" src="assets/images/image10.png" class="img-fluid" alt="terumo" width="124" height="39"/>
</li> 
                </ul>
              </div>
            </div></div><div class="owl-item" aria-hidden="true" style={{width: "750.995px", marginRight: "80px"}}><div class="item">
              <div class="mnialstrt">
                <div class="mnialtext text-center">
                  <div class="main-content2">
                    <p>The quality of leads generated through your service is outstanding. Your B2B lead generation expertise has revolutionized our approach to sales, yielding impressive results.  </p>
                  </div>
                  <div class="main-content">
                    <p>The quality of leads generated through your service is outstanding. Your B2B lead generation expertise has revolutionized our approach to sales, yielding impressive results.  </p>
                  </div>
                </div>
               <ul class="mnialicon mnc1">  
                   <li class="mnialname">Smith </li>
                       <li class="mnialdgnation">Sales Head </li> 
                       <li class="mnialclien-img">
<img fetchpriopity="high" src="assets/images/image11.png" class="img-fluid" alt="meiji" width="124" height="39"/>
</li> 
                </ul>
              </div>
            </div></div><div class="owl-item" aria-hidden="true" style={{width: "750.995px", marginRight: "80px"}}><div class="item">
              <div class="mnialstrt">
                <div class="mnialtext text-center">
                  <div class="main-content2">
                    <p>Your lead generation service has been a revelation for us. We're now engaging with potential clients who are genuinely interested, boosting our sales efficiency. </p>
                  </div>
                  <div class="main-content">
                    <p>Your lead generation service has been a revelation for us. We're now engaging with potential clients who are genuinely interested, boosting our sales efficiency. </p>
                  </div>
                </div>
               <ul class="mnialicon mnc1">  
                   <li class="mnialname">Alexandra </li>
                       <li class="mnialdgnation">Marketing Team Lead</li> 
                       <li class="mnialclien-img">
<img fetchpriopity="high" src="assets/images/image12.png" class="img-fluid" alt="nec" width="124" height="39"/>
</li> 
                </ul>
              </div>
            </div></div><div class="owl-item" aria-hidden="true" style={{width: "750.995px", marginRight: "80px"}}><div class="item">
              <div class="mnialstrt">
                <div class="mnialtext text-center">
                  <div class="main-content2">
                    <p>Our lead conversion rates have soared since partnering with you. Your B2B lead generation service has become an invaluable asset to our sales strategy.  </p>
                  </div>
                  <div class="main-content">
                    <p>Our lead conversion rates have soared since partnering with you. Your B2B lead generation service has become an invaluable asset to our sales strategy.  </p>
                  </div>
                </div>
               <ul class="mnialicon mnc1">  
                   <li class="mnialname">Martin White  </li>
                       <li class="mnialdgnation">Marketing Strategist</li> 
                       <li class="mnialclien-img">
<img fetchpriopity="high" src="assets/images/image13.png" class="img-fluid" alt="denso" width="124" height="39"/>
</li> 
                </ul>
              </div>
            </div></div><div class="owl-item" aria-hidden="true" style={{width: "750.995px", marginRight: "80px"}}><div class="item">
              <div class="mnialstrt">
                <div class="mnialtext text-center">
                  <div class="main-content2">
                    <p>We've seen a noticeable increase in our sales productivity, all thanks to your B2B lead generation service. Connecting with interested prospects has never been easier. </p>
                  </div>
                  <div class="main-content">
                    <p>We've seen a noticeable increase in our sales productivity, all thanks to your B2B lead generation service. Connecting with interested prospects has never been easier. </p>
                  </div>
                </div>
                <ul class="mnialicon mnc1">  
                   <li class="mnialname">Thomas Smith </li>
                       <li class="mnialdgnation">Marketing Director</li> 
                       <li class="mnialclien-img">
<img fetchpriopity="high" src="assets/images/image14.png" class="img-fluid" alt="kirin" width="124" height="39"/>
</li> 
                </ul>
              </div>
            </div></div></div></div><div class="owl-nav"><button type="button" role="presentation" class="owl-prev disabled" aria-disabled="true" tabindex="-1"><span aria-label="Previous" title="Previous" aria-disabled="true">‹</span><span class="offscreen">Go to previous slide</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next" title="Next">›</span><span class="offscreen">Go to next slide</span></button></div><div class="owl-dots disabled"></div></div>
         <div class="" id="counter"></div>
        </div>
        <div class="col-md-12 text-center">
          <div class="btnallTp1 btnallTpW1 pt-5"><a href="/testimonial/">View All <i class="mdi mdi-arrow-bottom-right"></i></a></div>
        </div>
      </div>
    </div>
  </section>

  
  <section class="sec">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="whowearebg">

            <div class="whowearebg1">


              <div class="who-we-arebg">
                <div class="who-we-areText whowe1">
                  <div class="who-we-are-sub">Who are we? </div>
                  <div>
                    <h2>We find paying customers for your business. </h2>
                    <p>With a relentless focus on helping industry leaders achieve their sales and revenue goals, we specialize in driving results through a spectrum of non-conventional strategies. From B2B lead generation that streamlines your sales process to boosting website traffic and conversions through SEO and social media optimization, we're here to amplify your success. Our tailored approach ensures you connect with the right audience and witness unparalleled growth. Let's embark on a journey of higher sales, increased leads, and enhanced brand presence together.  </p>
                  </div>
                  <div class=""><a href="/about-us/">Explore More..</a></div>
                </div>
                <div class="who-we-are-video">
                  <div class="video-thumbnailbg">
                    <div class="imgblr"></div>

{/*                     
                                 <div class="videotitlebg">
                                    <div class="videotitle">A Decadal Experience</div>
                                    <div class="videodirector">HR Director</div>
                                 </div> */}

                  </div>
                </div>
              </div>

            

            </div>

            

            <div class="whowearebg2">
              <div class="who-we-arebg we-arebg2">
                <div class="who-we-areText whowe2">
                  <div class="million-bg">
                    <div class="million-img">

                    
                      
                        <img fetchpriopity="high" src="assets/images/millon-images.webp" class="img-fluid" alt="Happy Worldwide Clients"  width="268" height="57"/> 
                    </div>
                    <div class="million-text">
                      <div class="million-1milon">500 + <span>Happy Clients Worldwide</span></div>
                    </div>
                  </div>
                </div>
                <div class="who-we-are-video">
                  <div class="video-thumbnailbg">
                    
                      <img fetchpriopity="high" src="assets/images/year-experience.webp" class="img-fluid" alt="10+ years of experience - talk2lead" width="346" height="109"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="sec o-p-services">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="text-center">
            <h2>Our Digital Marketing Solutions </h2>
          </div>
        </div>
        <div class="col-md-12">
          <div class="topfixedbghd">
            <div class="topfixedbg">
              <div class="topfixed-service navigation">
                <ul class="nav nav-tabs desktop-v" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="B2BLead-tab" data-bs-toggle="tab" data-bs-target="#B2BLead" type="button" role="tab" aria-controls="B2BLead" aria-selected="true"><span><img src="https://talk2lead.com/assets/images/homepage/our-services/content-devlopment-icon.svg" alt="1" class="img-fluid img2" width="14" height="14"/></span> B2B Lead Generation </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="Searchengine-tab" data-bs-toggle="tab" data-bs-target="#Searchengine" type="button" role="tab" aria-controls="Searchengine" aria-selected="false"><span><img src="https://talk2lead.com/assets/images/homepage/our-services/elearning-iconw.svg" class="img-fluid img2" alt="2" width="13" height="10"/></span> Search engine optimization</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="Socialmedia-tab" data-bs-toggle="tab" data-bs-target="#Socialmedia" type="button" role="tab" aria-controls="Socialmedia" aria-selected="false"><span><img src="https://talk2lead.com/assets/images/homepage/our-services/accessiblity-iconw.svg" class="img-fluid img2" alt="3" width="12" height="16"/></span> Social media optimization</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="Pay-per-tab" data-bs-toggle="tab" data-bs-target="#Pay-per" type="button" role="tab" aria-controls="Pay-per" aria-selected="false"><span><img src="https://talk2lead.com/assets/images/homepage/our-services/editorial-pre-press-iconw.svg" class="img-fluid img2" alt="4" width="12" height="12"/></span> Pay-per-click advertising</button>
                  </li> 
                </ul>
              </div>
              <div class="topfixed-list">
                <div class="tab-content ">
                  <div class="tab-pane active" id="B2BLead" role="tabpanel" aria-labelledby="B2BLead-tab">
                    <div class="services-step services-step1 leftrightdv">
                      <div class="services-img"> <span>
                        
                          <img fetchpriopity="high" src="https://talk2lead.com/assets/images/homepage/our-services/b2b-lead-generation.webp" class="img-fluid" alt="B2B Lead Generation"  width="384" height="414"/>
                        </span> </div>
                      <div class="servicesText">
                        <h2 class="who-we-are-sub">B2B Lead Generation </h2>
                        <div class="h2same">Get paying customers for your business </div>
                        <p>Unlocking a stream of paying customers for your business with our B2B lead generation solutions. We specialize in connecting you with the right prospects, streamlining your sales process, and ensuring that every interaction counts. Say goodbye to cold calls and hello to a steady flow of interested and potential clients ready to fuel your growth. </p>
                        <ul>
                          <li><span><i class="mdi mdi-arrow-top-right"></i></span> <a href="/lead-generation/education/">Education</a> </li>
                          <li><span><i class="mdi mdi-arrow-top-right"></i></span> <a href="/lead-generation/travel-and-hospitality/">Travel &amp; Hospitality</a> </li>
                          <li><span><i class="mdi mdi-arrow-top-right"></i></span> <a href="/lead-generation/technology-marketplace/">Technology Marketplace</a> </li>
                          <li><span><i class="mdi mdi-arrow-top-right"></i></span> <a href="/lead-generation/healthcare/">Healthcare</a> </li> 
                        </ul>
                        <div class="btnallTp1"> <a href="/contact-us/">Get in touch <i class="mdi mdi-arrow-bottom-right"></i></a> </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="Searchengine" role="tabpanel" aria-labelledby="Searchengine-tab">
                    <div class="services-step services-step6 leftrightdv">
                      <div class="services-img"> <span>
                       
                          <img fetchpriopity="high" src="https://talk2lead.com/assets/images/homepage/our-services/search-engine-optimization.webp" class="img-fluid" alt="eLearning Services"  width="384" height="414"/> 
                        </span> </div>
                      <div class="servicesText">
                        <h2 class="who-we-are-sub">Search engine optimization </h2>
                        <div class="h2same">Rank your business in the top search results </div>
                        <p>Elevate your business's visibility and reach with our comprehensive search engine optimization services. Our expertise in optimizing your online presence ensures that your brand not only ranks higher in search results but also captures the attention of your target audience. Unleash the power of SEO and watch your business ascend to the top.</p>
                        <ul>
                          <li><span><i class="mdi mdi-arrow-top-right"></i></span> <a href="#">Education</a> </li>
                          <li><span><i class="mdi mdi-arrow-top-right"></i></span> <a href="#">Travel &amp; Hospitality</a> </li>
                          <li><span><i class="mdi mdi-arrow-top-right"></i></span> <a href="#">Technology Marketplace</a> </li>
                          <li><span><i class="mdi mdi-arrow-top-right"></i></span> <a href="#">Healthcare</a> </li> 
                        </ul>
                        <div class="btnallTp1"> <a href="/contact-us/">Get in touch <i class="mdi mdi-arrow-bottom-right"></i></a> </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="Socialmedia" role="tabpanel" aria-labelledby="Socialmedia-tab">
                    <div class="services-step services-step2 leftrightdv">
                      <div class="services-img"> <span>
                       
                          <img fetchpriopity="high" src="https://talk2lead.com/assets/images/homepage/our-services/social-media-optimization.webp" class="img-fluid" alt="Accessibility Services"  width="370" height="476"/> 
                        </span> </div>
                      <div class="servicesText">
                        <h2 class="who-we-are-sub">Social media optimization </h2>
                        <div class="h2same">Expand your online footprints on social media platforms </div>
                        <p>Amplify your online footprint and boost your presence across social media platforms with our dynamic social media optimization services. Our strategies are designed to enhance engagement, foster connections, and propel your brand's reach to new heights. Discover the true potential of social media as a platform for growth and influence</p>
                         <ul>
                          <li><span><i class="mdi mdi-arrow-top-right"></i></span> <a href="#">Education</a> </li>
                          <li><span><i class="mdi mdi-arrow-top-right"></i></span> <a href="#">Travel &amp; Hospitality</a> </li>
                          <li><span><i class="mdi mdi-arrow-top-right"></i></span> <a href="#">Technology Marketplace</a> </li>
                          <li><span><i class="mdi mdi-arrow-top-right"></i></span> <a href="#">Healthcare</a> </li> 
                        </ul>
                        <div class="btnallTp1"> <a href="/contact-us/">Get in touch <i class="mdi mdi-arrow-bottom-right"></i></a> </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="Pay-per" role="tabpanel" aria-labelledby="Pay-per-tab">
                    <div class="services-step services-step5 leftrightdv">
                      <div class="services-img"> <span>
                          <img fetchpriopity="high" src="https://talk2lead.com/assets/images/homepage/our-services/pay-per-click.webp" class="img-fluid" alt="Localization"  width="368" height="358"/> 
                        </span> </div>
                      <div class="servicesText">
                        <h2 class="who-we-are-sub">Pay-per-click advertising </h2>
                        <div class="h2same">Achieve marketing goals, other than just profits </div>
                        <p>Unleash the potential of your marketing goals beyond mere profits with our innovative pay-per-click advertising services. Our strategies encompass more than just financial gains; they're designed to elevate your brand's exposure, lead generation, content engagement, and overall digital presence. Experience a comprehensive approach to PPC that drives holistic success for your business</p>
                        <ul>
                          <li><span><i class="mdi mdi-arrow-top-right"></i></span> <a href="#">Education</a> </li>
                          <li><span><i class="mdi mdi-arrow-top-right"></i></span> <a href="#">Travel &amp; Hospitality</a> </li>
                          <li><span><i class="mdi mdi-arrow-top-right"></i></span> <a href="#">Technology Marketplace</a> </li>
                          <li><span><i class="mdi mdi-arrow-top-right"></i></span> <a href="#">Healthcare</a> </li> 
                        </ul>
                        <div class="btnallTp1"> <a href="/contact-us/">Get in touch <i class="mdi mdi-arrow-bottom-right"></i></a> </div>
                      </div>
                    </div>
                  </div>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section class="sec" id="industry-sec">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="text-center">
            <h2>Industries We Serve! </h2>
          </div>
        </div>
        <div class="col-md-12">
          <div class="indus-slider">
            <div class="industries-stepbg">
              <div class="industries-step industries-step1">
                <div class="industries-img"><span>
                  
                    <img fetchpriopity="high" src="assets/images/education.webp" class="img-fluid" alt="eLearning Solutions for K12 Education" width="212" height="242"/> 
                  </span></div>
                <div class="industries-text">
                  <h3><a href="/">Education </a></h3>
                  <p>Empower your journey in Education and our marketing prowess. Our tailored solutions in lead generation, SEO, social media optimization, and PPC are strategically aligned to fuel growth and reach for educational institutions and service providers.  </p>
                      {/* <div class="btnsbtback"><a href="https://talk2lead.com/k12/">Readmore...</a></div> */}
                </div>
              </div>
              <div class="industries-step industries-step2">
                <div class="industries-img"><span>
                 
                    <img fetchpriopity="high" src="assets/images/travel-hospitality.webp" class="img-fluid" alt="eLearning Solutions for College and Universities" width="212" height="241"/>
                  </span></div>
                <div class="industries-text">
                  <h3><a href="/">Travel & Hospitality </a></h3>
                  <p>Elevate the Travel & Hospitality industry's digital strategies. Our comprehensive suite of services, from B2B lead generation to SEO and social media optimization, is geared towards expanding your outreach and enhancing customer engagement. </p>
                {/* <div class="btnsbtback"><a href="https://talk2lead.com/higher-education/">Readmore...</a></div> */}
                </div>
              </div>
              <div class="industries-step industries-step3">
                <div class="industries-img"><span>
                  
                    <img fetchpriopity="high" src="assets/images/technology-marketplace.webp" class="img-fluid" alt="eLearning Solutions for EdTech Companies"  width="212" height="241"/>
                  </span></div>
                <div class="industries-text">
                  <h3>  <a href= "/"></a>  Technology Marketplace </h3>
                  <p>Thrive in the fast-paced Technology Marketplace with marketing expertise. Our integrated solutions, spanning lead generation to SEO and social media optimization, are crafted to enhance your visibility, drive sales, and establish industry dominance. </p>
                                       {/* <div class="btnsbtback"><a href="#">Readmore...</a></div> */}
                </div>
              </div>
              <div class="industries-step industries-step4">
                <div class="industries-img"><span>
                  
                    <img fetchpriopity="high" src="assets/images/healthcare.webp" class="img-fluid" alt="eLearning Solutions for Publishers"  width="212" height="241"/> 
                  </span></div>
                <div class="industries-text">
                  <h3>  <a href= "/"></a>Healthcare </h3>
                  <p>Navigate the Healthcare landscape with our strategic digital solutions. From B2B lead generation to SEO and social media optimization, our services are meticulously designed to help you reach wider audiences, drive conversions, and foster lasting patient relationships </p>
                                          {/* <div class="btnsbtback"><a href="#">Readmore...</a></div> */}
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </section>

  






  <div class="modal fade" id="renee-boh" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body"> </div>
    </div>
  </div>
</div>
<section class="sec pt-0 s-reviewbg">
   <div class="container">
   <div class="row">
      <div class="col-md-12">
         <div class="text-center s-review">
            <ul class="pt-0">
               <li><img src="assets/images/trustpilot-review-icon.webp" class="img-fluid" alt="Trustpilot Rating"/></li>
               <li><img src="assets/images/google-review-icon.webp" class="img-fluid" alt="Google Review and Rating"/></li>
            </ul>
         </div>
      </div>
   </div>
   </div>
</section>

        </>
    )
}

export default Testhomecarousal