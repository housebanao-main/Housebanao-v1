import React from 'react';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../store/slice/slice';
import { SCREENS } from '../Utils/CustomModal/Modal';
import Link from 'next/link';

export const Footer = () => {
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(toggleModal({
      screen: SCREENS.LEAD_POPUP,
      visible: true,
    }));
  };

  const handleSocialIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="w-full h-auto bg-[#222222] lg:px-0 px-[20px]">
      <div className="lg:max-w-[1290px] w-full mx-auto flex flex-col py-[20px]">
        <div className="font-semibold text-[25px] ml-[40px] leading-[40px] text-white">
          About us
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 py-[20px] lg:gap-[40px] gap-[20px]">
          <div className="flex flex-col text-white lg:ml-[40px]">
            <span className="text-[15px] font-semibold text-white">Site Map</span>
            <div className="w-full flex flex-col mt-[10px]">
              <ul className="flex flex-col gap-[10px] w-[150px] text-[13px] text-white">
                {siteMapMenus.map((menu, index) => (
                  <li key={index}>
                    <Link href={menu.link}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col text-white lg:ml-[40px]">
            <span className="text-[15px] font-semibold text-white">Information</span>
            <div className="w-full flex flex-col mt-[10px]">
              <ul className="flex flex-col gap-[10px] w-[150px] text-[13px] text-white">
                {informationMenus.map((menu, index) => (
                  <li key={index}>
                    <Link href={menu.link}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col text-white lg:mr-[40px] lg:mt-[10px] mt-0 mr-[40px]">
            <a href="mailto:invest@housebanao.com" className="text-white text-[13px]">support@housebanao.com</a>
            <div className="w-full mt-2 text-white text-[13px]">
              <p className="w-[200px]">
                746A, 7th floor, JMD Megapolis Sector 48, Gurgaon, Haryana 122018
              </p>
            </div>
            <div className="flex gap-[20px] mt-4">
              {socialIcons.map(({ icon, url }, index) => (
                <FontAwesomeIcon
                  icon={icon}
                  key={index}
                  style={{ color: '#ffffff', backgroundColor: '#313131' }}
                  onClick={() => handleSocialIconClick(url)}
                  className="w-[15px] h-[15px] p-[5px] cursor-pointer rounded-[4px]"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-white text-sm py-[10px]">
          © 2024 Vive HouseBanao Technologies Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const siteMapMenus = [
  { name: 'Services', link: '/service' },
  { name: 'Our Projects', link: '/ourprojects' },
  { name: 'How It Works', link: '/howitwork' },
  { name: "Blog", link: "/blog" },
  { name: "Contact Us", link: "/contactus" },
{ name: "About Us", link: "/aboutus" },  
];

const informationMenus = [
  { name: 'Terms & Conditions', link: '/terms' },
  { name: 'Privacy Policy', link: '/privacy' },
  { name: 'FAQs', link: '/faqss' },
];

const socialIcons = [
  { icon: faFacebookF, url: 'https://www.facebook.com/profile.php?id=61556675355596' },
  { icon: faInstagram, url: 'https://www.instagram.com/house_banao' },
  { icon: faLinkedinIn, url: 'https://www.linkedin.com/company/housebanao2/' },
  { icon: faYoutube, url: 'https://www.youtube.com/@HouseBanaoo' },
  { icon: faPinterestP, url: 'https://in.pinterest.com/house_banao/' },
];

export default Footer;
