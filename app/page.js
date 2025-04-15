"use client"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import HeaderM from "./components/HeaderM";
import About from "./components/About";
import AboutM from "./components/AboutM";
import ObserverProvider from "./components/Observer";
import { BarLoader } from "react-spinners";
import Couple from "./components/Couple";
import CoupleM from "./components/CoupleM";
import Abays from "./components/Abays";
import AbaysM from "./components/AbaysM";
import Link from 'next/link';
import ScheduleM from "./components/ScheduleM";
import DresscodeM from "./components/DresscodeM";


export default function Home() {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return (
  //     <div style={{
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       height: '100vh',
  //       fontSize: '1.2rem',
  //       flexDirection: 'column',
  //       gap: '4px'
  //     }}
  //     >
  //       <p className="text-moss gap-1">Loading...</p>
  //       <BarLoader 
  //         color="#527d39" 
  //         height={3} 
  //         width={200}
  //       />
  //     </div>
  //   );
  // }

  return (
    <>
    <ObserverProvider>
    <div className="mr-auto ml-auto w-full 2x1:max-w-[1510px] xl:max-w-[1220px] lg:max-w-[984px] md:max-w-[720px] sm:max-w-[640px] overflow-x-hidden">
    {/* <div className="mr-auto ml-auto w-full 2x1:max-w-[1510px] xl:max-w-[1220px] lg:max-w-[984px] md:max-w-[500px]"> */}
      <Navbar />
      <Header/>
      <HeaderM/>
      <About />
      <AboutM />
      <Couple />
      <CoupleM />
      <Abays />
      <AbaysM />
      <ScheduleM />
      <DresscodeM />
    </div>
    </ObserverProvider>
    </>
  );
}
