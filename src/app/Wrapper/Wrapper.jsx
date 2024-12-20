'use client'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { toggleModal } from '../store/slice/slice';
import { SCREENS } from '../component/Utils/CustomModal/Modal';
import { Header } from '../component/Header/Header';
import { Footer } from '../component/Footer/Footer';
// import { useRouter, Router } from 'next/router';

export const Wrapper = ({children}) => {
    const dispatch = useDispatch();
  const pathname= window.location.pathname;


const openLeadPopup = () => {
  dispatch(toggleModal({
    screen: SCREENS.LEAD_POPUP,
    visible: true
  }))
}

useEffect(() => {
     setTimeout(() => {
      openLeadPopup();
    }, 5000);
}, []);
  return (
    // <Router>
<>
  {  pathname !== '/landing' && <Header />}
    {children}
  <Footer/>
  </>
  // </Router>
  )
}
