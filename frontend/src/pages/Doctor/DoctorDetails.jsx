import React from 'react'
import doctorImg from "../../assets/images/doc1.png"
import starIcon from "../../assets/images/Star.png"
import SidePanel from './SidePanel';

const DoctorDetails = () => {
  return (
    <section>
      <div className="max-w-[1170] px-5 mx-auto">
    <div className="grid md:grid-cols-3 gap-[50px]">
    <div className="md:col-span-2">
      <div className="flex items-center gap-5">
        <figure className="max-w-[200px] max-h-[200px]">
        <img src={doctorImg} alt="" className="w-full" />
        </figure>

        <div>
          <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 ;g:px-6 text-[12px]
          leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
            Surgeon

          </span>
          <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
          Dr. Sajida Aqla
          </h3>
          <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
          lg:leading-7 font-sembold text-headingColor">
            <img src={starIcon} alt="" />4.8
          </span>
          <span className="text[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            (272)
          </span>
          </div>
          <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
            
Dr. Aqla is a highly skilled and compassionate surgeon renowned for her expertise in various
 surgical procedures. With precision and dedication, she navigates the complexities of the operating room, demonstrating a profound commitment to improving the lives of her patients. Dr. Aqila's meticulous attention to detail and gentle bedside manner instill confidence and comfort in those under her care. Her unwavering dedication to advancing medical knowledge and techniques ensures that she remains at the forefront of surgical innovation. With a combination of expertise and empathy, Dr. Aqila is a trusted figure in the medical community, embodying the pinnacle of surgical excellence.
          </p>
        </div>
      </div>
       
    </div>
    <div>
    <SidePanel />
    </div>
    </div>
      </div>
    </section>
  );
};

export default DoctorDetails