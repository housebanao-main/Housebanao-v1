// import { usePopup } from '../context/PopupContext';
'use client';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Service from '../components/Service';
import QuickService from '../components/Quickservice';
import Steps from '../components/Steps';
import Testimonials from '../components/Testimonials';
import Description from '../components/Description';
import Footer from '../components/Footer';
import { CollabsSection } from '../components/CollabSection';
import Customized from '../components/Customized';
import Professional from '../components/Professional';
import Popup from '../components/Popup';
import { usePopup } from '../context/PopupContext';
import './globals.css'; // Corrected import statement
// import { use } from 'react';

export default function IndexPage() {
  const { isPopupVisible, openPopup } = usePopup();
  // console.log("------", isPopupVisible, openPopup);

  return (

    <div className="bg-gray-50 w-full overflow-x-hidden">
      {/* Navbar for Home Page */}
      <Navbar />

      {/* Sections */}
      <section id="home">
        <Home />
      </section>
      <section id="contactus" >
        <Customized />
      </section>

      {/* Remaining Content */}
      <Professional />
      <section id="services">
        <Service openPopup={openPopup} />
      </section>
      <section id="quickservices">
        <QuickService />
      </section>
      <section id="whyus">
        <Description />
      </section>
     
      <Testimonials />
      <CollabsSection />
      <Footer />

      {/* Popup - Conditional Rendering */}
      {isPopupVisible && <Popup />}
    </div>
  );
}
