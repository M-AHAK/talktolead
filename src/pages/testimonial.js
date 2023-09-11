import TestNavbar from "../components/layout/navbar"
import TestHeader from "../components/layout/header"
import Testbanner from "@/components/testimonials/banner"
import Testbody from "@/components/testimonials/testimonialbody"
import Testfooter from "@/components/layout/footer"
const testimonial=()=>{
    return (
        <>
        <TestHeader/>
        <TestNavbar/>
        <Testbanner/>
        <Testbody/>
        <Testfooter/>
        {/* <h1>hello mahak</h1> */}
        </>
    )
}
export default testimonial