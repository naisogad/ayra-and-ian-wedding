"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { useState } from "react";
import HeaderM from "./components/HeaderM";

export default function Home() {

  

  return (
    <>
    <div className="mr-auto ml-auto w-full xl:max-w-[1220px] lg:max-w-[984px] md:max-w-[984px] sm:max-w-[600px]">
    <Navbar />
    <Header/>
    <HeaderM/>
    </div>
    </>
  );
}
