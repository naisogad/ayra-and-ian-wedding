"use client"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import HeaderM from "./components/HeaderM";
import About from "./components/About";
import AboutM from "./components/AboutM";
import ObserverProvider from "./components/Observer";
import { BarLoader } from "react-spinners";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000 milliseconds = 2 seconds

    // Clean up the timer if the component unmounts before the delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        <BarLoader 
          color="#527d39" 
          height={3} 
          width={200}
        />
      </div>
    );
  }

  return (
    <>
    <ObserverProvider>
    <div className="mr-auto ml-auto w-full xl:max-w-[1220px] lg:max-w-[984px] md:max-w-[984px] sm:max-w-[600px]">
      <Navbar />
      <Header/>
      <HeaderM/>
      <About />
      <AboutM />
    </div>
    </ObserverProvider>
    </>
  );
}
