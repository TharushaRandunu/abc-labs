import React from 'react'
import logo from '../../assets/images/logo.png'


const Footer = () => {
  const year = new Date().getFullYear()
  return (
  <footer className="pb-16 pt-10">

<div className="container">
  <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
<div>
  <img src={logo} alt="" />
  <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
    Developed by Tharusha Randunu Silva
  </p>
</div>
  </div>
  <div>
    
  </div>
  </div>
  </footer>
    
  );
};

export default Footer