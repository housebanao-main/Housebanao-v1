import Header from "../components/Header";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import FocusQuality from "./components/FocusQuality";
import Getintouch from "./components/Getintouch";
import OneStop from "./components/OneStop";
import Services from "./components/Services";

export default function Page() {
  return (
    <>
     {/* <Header className={"absolute top-0 container bg-transparent text-white border-red-400 border-2 "} /> */}
     <div className=" overflow-x-hidden">

     {/* <Header className={"bg-transparent text-black "} /> */}
     
      <Banner/>
     <FocusQuality/>
     <OneStop/>
     <Getintouch/>
     <Services/>
     <Contact/>
     </div>
    </>
  );
}
