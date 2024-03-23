import React from 'react'
import heroImg01 from "../assets/images/heroImg01.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import {BsArrowRight,} from "react-icons/bs";
import ServiceList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';
const Home = () => {
  return(<>
  {/*====== hero section======*/}
  <>
  <section className="hero_section pt-[60px] 2xl:h-[800px]">
  <div className="container">
  <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
    {/* ====== hero content ====== */}
    <div>
      <div className="lg:w-[570px]">
        <h1 className="text-[36px] leading-[46px] text-irisBlueColor font-[800] md:text-[60px] md:leading-[70px]">
        Welcome to ABC Laboratory - Your Trusted Partner in Medical Diagnostics
        </h1>
        <p className="text_para">
        At ABC Laboratory , we are committed to providing precise and reliable diagnostic services to support healthcare professionals and patients in their quest for optimal health. With state-of-the-art facilities, a team of experienced professionals, and a dedication to cutting-edge technology, we strive to deliver accurate results in a timely manner.
        </p>
        <button className="btn">Request an appointment</button>
      </div>
{/* ====== hero counter ====== */}
<div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
  <div>
    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColour">
    25+
    </h2>
    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
    <p className="text_para"> Years Of Experience</p>
  </div>
  <div>
    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColour">
    25+
    </h2>
    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
    <p className="text_para"> Locations</p>
  </div>
  <div>
    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColour">
    25+
    </h2>
    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
    <p className="text_para"> Trust</p>
  </div>
  
</div>

    </div>
{/* ====== hero counter ====== */}
<div className="flex gap-[30px] justify-end">
  <div>
    <img src={heroImg01}/>
  </div>

</div>
  </div>
  </div>
  </section>
  </>
  {/*====== hero section end======*/}
  <section>
  <div className="container">
    <div className="lg:w-[470px] mx-auto"><h2 className="heading text-center">Providing the best medical services</h2>
    <p className="text_para text-center">
    Precision in Every Test, Care in Every Result: Your Trusted Medical Laboratory Partner.
    </p>
    </div>
    <div className="flex flex-wrap items-center justify-between flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg;mt-[55px]">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      <div className="py-[30px] px-5">
        <div className="flex items-center justify-center">
          <img src={icon01} alt=""/>
          </div>
          <div>
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
            Find a Doctor
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
            Exceptional Diagnostics, Expert Care: Where Precision Meets Compassion with Our Best-in-Class Doctors.
            </p>
          </div>
          <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
            <BsArrowRight className="group-hover:text-white"/>
          </Link>
      </div>
      <div className="py-[30px] px-5">
        <div className="flex items-center justify-center">
          <img src={icon02} alt=""/>
          </div>
          <div>
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
            Our Locations
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
            Exceptional Diagnostics, Expert Care: Where Precision Meets Compassion with Our Best-in-Class Doctors.
            </p>
          </div>
          <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
            <BsArrowRight className="group-hover:text-white"/>
          </Link>
      </div>
      <div className="py-[30px] px-5">
        <div className="flex items-center justify-center">
          <img src={icon03} alt=""/>
          </div>
          <div>
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
            Book an Appointment
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
            Exceptional Diagnostics, Expert Care: Where Precision Meets Compassion with Our Best-in-Class Doctors.
            </p>
          </div>
          <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
            <BsArrowRight className="group-hover:text-white"/>
          </Link>
      </div>
    </div>
    </div>
  </div>
  </section>
  {/*====== service section start ====== */}
  <section>
    <div className='container'>
      <div className="xl:w-[470] mx-auto">
        <h2 className="heading text-center">Our Medical Services</h2>
        <p className="text_para text-center">Exceptional Diagnostics, Expert Care: Where Precision Meets Compassion with Our Best-in-Class Doctors.
        </p>

      </div>
       <ServiceList />
      </div>
  </section>
   {/*====== service section end ====== */}
   {/*====== Our great doctors section start ====== */}
   <div className="container">
   <div className="xl:w-[470] mx-auto">
        <h2 className="heading text-center">Our Great Doctors</h2>
        <p className="text_para text-center">Exceptional Diagnostics, Expert Care: Where Precision Meets Compassion with Our Best-in-Class Doctors.
        </p>

      </div>
      <DoctorList/>

   </div>
   {/*====== Our great doctors end====== */}
  
  </>
 
  
  );
};

export default Home;