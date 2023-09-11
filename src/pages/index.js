import { Inter } from 'next/font/google'
 import Testhomecarousal from '@/components/home/homecarousal'
import TestNavbar from '@/components/layout/navbar'
import TestHeader from '@/components/layout/header'
import Testfooter from '@/components/layout/footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   < TestHeader/>
    <TestNavbar/>
       <Testhomecarousal/>
       <Testfooter/>
    </>
  )
}
