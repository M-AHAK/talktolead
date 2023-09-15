const TestHeader =() =>{
    return(
        <>
       <header className="t-mobile-menu fixed-top">
   <div className="dflex bg-nav-icon">
      <div className="t-m-logo"><a className="navbar-brand" href="/" itemprop="url" style={{color: "#000000", width:"150px"}}><img style={{color: '#000000', width:'150px'}} src="/assets/images/logo.svg" className="img-fluid img1" alt="logo"/></a></div>
      <div className="t-nav-icon d-flex align-item-center"> 
         <div data-trigger="navbar_main" className="t-m-icon d-lg-none btn btn-warning ms-3"><i className="mdi mdi-menu"></i></div>
      </div>
   </div>
</header>
        </>
    )
}
export default TestHeader