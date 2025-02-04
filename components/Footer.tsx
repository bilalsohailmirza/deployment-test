import Image from "next/image";
import React from "react";
import phoneIcon from "@/public/phone.svg";
import mailIcon from "@/public/mail.svg";

const Footer = () => {
  return (
    <div className="my-[5%] text-white">
      <hr className="p-1" />
      <div className="text-center ">
        <h2 className="text-[28px] md:text-[40px] font-semibold">
          Luminary AI Consulting
        </h2>
      </div>
      <div className="text-center text-lg md:text-2xl">
        <h3 className="font-medium">Luminary AI Consulting, LLC</h3>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between mx-[5%] my-[5%] text-lg md:text-2xl">
        <div className="flex gap-[5%]">
          <Image
            src={phoneIcon}
            width={1}
            height={1}
            alt="phone icon"
            className="w-[30px] inline"
          />
          <h3>+92321123452</h3>
        </div>
        <div className="flex gap-[5%]">
          <Image
            src={mailIcon}
            width={1}
            height={1}
            alt="mail icon"
            className="w-[30px]"
          />
          <h3>info@luminaryai.com</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
