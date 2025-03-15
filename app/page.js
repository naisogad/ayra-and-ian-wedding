import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <div className="mr-auto ml-auto pr-[15px] pl-[15px] w-full xl:max-w-[1220px] lg:max-w-[984px] md:max-w-[728px] sm:max-w-[600px]">
    <Navbar />
    <Header/>
    </div>
    </>
  );
}
