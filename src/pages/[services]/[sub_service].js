import Automobile from "@/components/LeadGeneration/Automobile";
import Brokerage from "@/components/LeadGeneration/Brokerage";
import Education from "@/components/LeadGeneration/Education";
import Finance from "@/components/LeadGeneration/Finance";
import Healthcare from "@/components/LeadGeneration/Healthcare";
import RealEstate from "@/components/LeadGeneration/RealEstate";
import Technology from "@/components/LeadGeneration/Technology";
import Travel from "@/components/LeadGeneration/Travel";
import TestHeader from "@/components/layout/header";
import TestNavbar from "@/components/layout/navbar";
import Testfooter from "@/components/layout/footer";
import React from "react";
import SearchAutomobile from "@/components/Search Engine/Search-Automobile";
import SearchBrokerage from "@/components/Search Engine/Search-Brokerage";
import SearchEducation from "@/components/Search Engine/Search-Education";
import SearchFinance from "@/components/Search Engine/Search-Finance";
import SearchHealthcare from "@/components/Search Engine/Search-Healthcare";
import SearchRealEstate from "@/components/Search Engine/Search-RealEstate";
import SearchTechnology from "@/components/Search Engine/Search-Technology";
import SearchTravel from "@/components/Search Engine/Search-Travel";
import Ppcautomobile from "@/components/pay-per-click/ppcautomobile";
import Ppcbrokerage from "@/components/pay-per-click/ppcbrokerage";
import Ppceducation from "@/components/pay-per-click/ppceducation";
import Ppcfinance from "@/components/pay-per-click/ppcfinance";
import Ppchealthcare from "@/components/pay-per-click/ppchealthcare";
import Ppcrealestate from "@/components/pay-per-click/Ppcrealestate";
import Ppctechnology from "@/components/pay-per-click/ppctechnology";
import Ppctravel from "@/components/pay-per-click/ppctravel";
import Smoautomobile from "@/components/social-media/smoautomobile";
import Smobrokerage from "@/components/social-media/smobrokerage";
import Smoeducation from "@/components/social-media/smoeducation";
import Smofinance from "@/components/social-media/smofinance";
import Smohealthcare from "@/components/social-media/smohealthcare";
import Smorealestate from "@/components/social-media/smorealestate";
import Smotechnology from "@/components/social-media/smotechnology";
import Smotravel from "@/components/social-media/smotravel";
const Action = ({services,sub_service}) => {
    return (
<>
<TestHeader/>
<TestNavbar/>
{
    services === 'lead-generation' && sub_service=== 'automobile-marketplace' && <Automobile />
}
{
    services === 'lead-generation' && sub_service=== 'brokerage' && <Brokerage/>
}
{
   services === 'lead-generation' && sub_service=== 'education' && <Education/>
}
{
   services === 'lead-generation' && sub_service=== 'finance-and-banking' && <Finance/>
}
{
    services === 'lead-generation' && sub_service=== 'healthcare' && <Healthcare/>
}
{
   services === 'lead-generation' && sub_service=== 'real-estate' && <RealEstate/>
}
{
   services === 'lead-generation' && sub_service=== 'technology-marketplace' && <Technology/>
}
{
  services === 'lead-generation' && sub_service=== 'travel-and-hospitality' && <Travel/>
}
{
    services === 'seo' && sub_service=== 'automobile-marketplace' && <SearchAutomobile/>
}
{
    services === 'seo' && sub_service=== 'brokerage' && <SearchBrokerage/>
}
{
    services === 'seo' && sub_service=== 'education' && <SearchEducation />
}
{
    services === 'seo' && sub_service=== 'finance-and-banking' && <SearchFinance/>
}
{
    services === 'seo' && sub_service=== 'healthcare' && <SearchHealthcare/>
}
{
    services === 'seo' && sub_service=== 'real-estate' && <SearchRealEstate/>
}
{
    services === 'seo' && sub_service=== 'technology-marketplace' && <SearchTechnology/>
}
{
    services === 'seo' && sub_service=== 'travel-and-hospitality' && <SearchTravel/>
}
{
    services === 'ppc' && sub_service=== 'automobile-marketplace' && <Ppcautomobile/>
}
{
    services === 'ppc' && sub_service=== 'brokerage' && <Ppcbrokerage/>
}
{
    services === 'ppc' && sub_service=== 'education' && <Ppceducation/>
}
{
    services === 'ppc' && sub_service=== 'finance-and-banking' && <Ppcfinance/>
}
{
    services === 'ppc' && sub_service=== 'healthcare' && <Ppchealthcare/>
}
{
    services === 'ppc' && sub_service=== 'real-estate' && <Ppcrealestate/>
}
{
    services === 'ppc' && sub_service=== 'technology-marketplace' && <Ppctechnology/>
}
{
    services === 'ppc' && sub_service=== 'travel-and-hospitality' && <Ppctravel/>
}
{
    services === 'smo' && sub_service=== 'automobile-marketplace' && <Smoautomobile/>
}
{
    services === 'smo' && sub_service=== 'brokerage' && <Smobrokerage/>
}
{
    services === 'smo' && sub_service=== 'education' && <Smoeducation/>
}
{
    services === 'smo' && sub_service=== 'finance-and-banking' && <Smofinance/>
}
{
    services === 'smo' && sub_service=== 'healthcare' && <Smohealthcare/>
}
{
    services === 'smo' && sub_service=== 'real-estate' && <Smorealestate/>
}
{
    services === 'smo' && sub_service=== 'technology-marketplace' && <Smotechnology/>
}
{
    services === 'smo' && sub_service=== 'travel-and-hospitality' && <Smotravel/>
}
<Testfooter/>
</>
    )
}

export default Action

export  const getServerSideProps =  (context) => {
    return {
        props:{
            services: context.params.services,
            sub_service:context.params.sub_service
        }
    }
}