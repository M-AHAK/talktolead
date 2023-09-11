import Head from 'node_modules/next/head'
import Link from 'node_modules/next/link'


const TestNavbar = () =>{
    return(
        <>

   {/* <link href="/css/style.css?v=17cz00128457" rel="stylesheet">
 <link rel="preload" fetchpriority="high" as="image" href="https://www.talk2lead.com/testimonial/assets/images/logo.webp" type="image/webp">
 <link rel="preload" fetchpriority="high" as="image" href="https://www.talk2lead.com/testimonial/images/usa.webp" type="image/webp">  */}
        <Head>
        <link href="/assets/css/bootstrap.min.css" rel="stylesheet"></link>
        <link rel="stylesheet" href="/assets/css/materialdesignicons.min.css" />
        <link rel='stylesheet' href='/assets/css/owl.carousel.min.css' />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css"/> 
        <link rel="stylesheet" href="/assets/css/testimonial.css"/> 
        <link rel="stylesheet" href="/assets/css/custome.css"/> 
        <link rel="stylesheet" href="/assets/css/header-footer-style.css"/>
<link rel="stylesheet" href="/assets/css/mdi/css/materialdesignicons.min.css" />
 <link rel="stylesheet" href="/assets/css/slick.css"/>
<link rel="stylesheet" href="/assets/css/slick-theme.css"/>
<link rel="stylesheet" href="/assets/css/home-style.css"/>
<link rel="stylesheet" href="/assets/css/home-responsive.css"/>
<link rel="stylesheet" href="/assets/css/banner.css"/>
<link rel="stylesheet" href="/assets/css/types-of-services.css"/>
<link rel="stylesheet" href="/assets/css/training-module.css"/>
<link rel="stylesheet" href="/assets/css/our-clients-white.css"/>
<link rel="stylesheet" href="/assets/css/faqs.css"/>



        </Head>
        <nav id="navbar_main" class="mobile-offcanvas navbar navbar-expand-lg navbar-dark fixed-top"
    
        >
   <div class="container-fluid">
      <div class="offcanvas-header">   
         <button class="btn-close float-end"></button>
      </div>
      <div class=""><a class="navbar-brand d-logo" href="https://talk2lead.com/" itemprop="url" 
      style={{color: "#000000", maxWidth:"200px"}}><img src="/assets/images/logo.svg" alt="logo" class="img-fluid img1"/> </a></div>
      <ul class="navbar-nav ms-auto">
         <li class="nav-item dropdown dropdown-mega position-static">
            <a class="nav-link  dropdown-toggle" id="solutions_menu_button" data-bs-toggle="dropdown"> Solutions </a>
            <div class="dropdown-menu shadow">
               <div class="mega-content px-4">
                  <div class="container-fluid">
                     <div class="row"> 
                        <div class="col-lg-12 py-4 pt-0">
                           <div class="mega-menu-bg">
                              <div class="mega-menu-list">
                                 <ul class="navbar-nav mega-menu-custom">
                                    <li class="nav-item dropdown">
                                       <a class="nav-link  dropdown-toggle" data-bs-toggle="dropdown">
                                       <span class="icon-linknav"><img src="./Testimonials - What Our Clients Says About Us_files/k12.webp" class="img-fluid img1" alt="K12 Education"/>
                                       <img src="./Testimonials - What Our Clients Says About Us_files/k12w.webp" class="img-fluid img2" alt="K12 Education"/></span>
                                       <span class="nav-texttop">Lead Generation<span class="nav-textbtm">We Shape Learners thinking through our K12 Education Services</span></span>
                                       </a>
                                       <ul class="dropdown-menu dtop-vew">
                                          <li><a class="dropdown-item" href="/lead-generation/">Lead Generation</a></li>
                                          <li><a class="dropdown-item" href="/lead-generation/automobile-marketplace/"> Automobile Marketplace</a></li>
                                          <li><a class="dropdown-item" href="/lead-generation/brokerage/">brokerage   </a></li>
                                          <li><a class="dropdown-item" href="/lead-generation/education/">Education  </a></li>
                                          <li><a class="dropdown-item" href="/lead-generation/finance-and-banking/">Finance and Banking   </a></li>
                                          <li><a class="dropdown-item" href="/lead-generation/healthcare/">Healthcare    </a></li>
                                          <li><a class="dropdown-item" href="/lead-generation/real-estate/"> Real Estate    </a></li>
                                          <li><a class="dropdown-item" href="/lead-generation/technology-marketplace/">Technology Marketplace   </a></li>
                                          <li><a class="dropdown-item" href="/lead-generation/travel-and-hospitality/">Travel &amp; Hospitality</a></li>
                                       </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                       <a class="nav-link  dropdown-toggle" data-bs-toggle="dropdown">
                                       <span class="icon-linknav"><img src="./Testimonials - What Our Clients Says About Us_files/higher-education.webp" class="img-fluid img1" alt="Higher Education"/><img src="./Testimonials - What Our Clients Says About Us_files/higher-educationw.webp" class="img-fluid img2" alt="Higher Education"/></span>
                                       <span class="nav-texttop"> Search Engine <span class="nav-textbtm">We Provide Higher Educational Content Development Services</span></span>
                                       </a>
                                       <ul class="dropdown-menu">
                                          <li><a class="dropdown-item" href="/seo/">Search Engine</a></li>
                                         <li><a class="dropdown-item" href="/seo/automobile-marketplace/"> Automobile Marketplace</a></li>
                                          <li><a class="dropdown-item" href="/seo/brokerage/">brokerage   </a></li>
                                          <li><a class="dropdown-item" href="/seo/education/">Education  </a></li>
                                          <li><a class="dropdown-item" href="/seo/finance-and-banking/">Finance and Banking   </a></li>
                                          <li><a class="dropdown-item" href="/seo/healthcare/">Healthcare    </a></li>
                                          <li><a class="dropdown-item" href="/seo/real-estate/"> Real Estate    </a></li>
                                          <li><a class="dropdown-item" href="/seo/technology-marketplace/">Technology Marketplace   </a></li>
                                          <li><a class="dropdown-item" href="/seo/travel-and-hospitality/">Travel &amp; Hospitality</a></li>
                                       </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                       <a class="nav-link  dropdown-toggle" data-bs-toggle="dropdown">
                                       <span class="icon-linknav"><img src="./Testimonials - What Our Clients Says About Us_files/learning-solution.webp" class="img-fluid img1" alt="Learning Solutions"/><img src="./Testimonials - What Our Clients Says About Us_files/learning-solutionw.webp" class="img-fluid img2" alt="Learning Solutions"/></span>
                                       <span class="nav-texttop">Pay Per Click Advertising <span class="nav-textbtm">We Create Engaging e-Learning Solutions for Businesses.</span></span>
                                       </a>
                                       <ul class="dropdown-menu">
                                          <li><a class="dropdown-item" href="/ppc">Pay Per Click Advertising</a></li>
                                         <li><a class="dropdown-item" href="/ppc/automobile-marketplace/"> Automobile Marketplace</a></li>
                                          <li><a class="dropdown-item" href="/ppc/brokerage/">brokerage   </a></li>
                                          <li><a class="dropdown-item" href="/ppc/education/">Education  </a></li>
                                          <li><a class="dropdown-item" href="/ppc/finance-and-banking/">Finance and Banking   </a></li>
                                          <li><a class="dropdown-item" href="/ppc/healthcare/">Healthcare    </a></li>
                                          <li><a class="dropdown-item" href="/ppc/real-estate/"> Real Estate    </a></li>
                                          <li><a class="dropdown-item" href="/ppc/technology-marketplace/">Technology Marketplace   </a></li>
                                          <li><a class="dropdown-item" href="/ppc/travel-and-hospitality/">Travel &amp; Hospitality</a></li>
                                       </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                       <a class="nav-link  dropdown-toggle" data-bs-toggle="dropdown">
                                       <span class="icon-linknav"><img src="./Testimonials - What Our Clients Says About Us_files/accessibility.webp" class="img-fluid img1" alt="Accessibility"/> <img src="./Testimonials - What Our Clients Says About Us_files/accessibilityw.webp" class="img-fluid img2" alt="Accessibility"/></span>
                                       <span class="nav-texttop">Social Media <span class="nav-textbtm">We Ensure Content Accessibility for People with Disabilities</span></span>
                                       </a>
                                       <ul class="dropdown-menu">
                                          <li><a class="dropdown-item" href="/smo">Social Media</a></li>
                                          <li><a class="dropdown-item" href="/smo/automobile-marketplace/"> Automobile Marketplace</a></li>
                                          <li><a class="dropdown-item" href="/smo/brokerage/">brokerage   </a></li>
                                          <li><a class="dropdown-item" href="/smo/education/">Education  </a></li>
                                          <li><a class="dropdown-item" href="/smo/finance-and-banking/">Finance and Banking   </a></li>
                                          <li><a class="dropdown-item" href="/smo/healthcare/">Healthcare    </a></li>
                                          <li><a class="dropdown-item" href="/smo/real-estate/"> Real Estate    </a></li>
                                          <li><a class="dropdown-item" href="/smo/technology-marketplace/">Technology Marketplace   </a></li>
                                          <li><a class="dropdown-item" href="/smo/travel-and-hospitality/">Travel &amp; Hospitality</a></li>
                                       </ul>
                                    </li>
                                 </ul>
                              </div>
                               
                               <div class="menu-img-rightbg">
                            <div class="menu-img-right">
                        <div id="owl-demo" class="owl-carousel owl-theme menuslider owl-loaded owl-drag owl-hidden">
<div class="owl-stage-outer"><div class="owl-stage"></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div><div class="owl-dots disabled"></div></div>
                                
                        </div>
                    </div>  
                                
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </li>
         <li class="nav-item dropdown">
            <a class="nav-link  dropdown-toggle" data-bs-toggle="dropdown">  Insights </a>
            <ul class="dropdown-menu" style={{top:'100%!important'}}>
               <li><a class="dropdown-item" href="/about-us">About Us</a></li>
           
            </ul>
         </li>
         <li class="nav-item"><a class="nav-link" href="/testimonial/"> Testimonial</a></li> 
         <li class="nav-item"><a class="nav-link" href="/contact-us/"> Contact Us</a></li>
         {/* <style>
            .cntycode ul li a{{fontSize: "14px", fontWeight: "600"}}
            .cntycode ul li a img{{display: "inline-block", marginRight: "5px"}}
         </style> */}
      </ul>
   </div>
</nav>

 
 



<script src="/assets/js/jquery.min.js"></script> 
<script src="/assets/js/bootstrap.bundle.min.js"></script>  
 <script src="/assets/js/owl.carousel.min.js"></script> 
 <script src="/assets/js/slick.min.js"></script>

{/* <!--mega Menu script code start--> */}

<script></script>

</>  
    )
}
export default TestNavbar