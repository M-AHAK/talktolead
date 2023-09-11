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