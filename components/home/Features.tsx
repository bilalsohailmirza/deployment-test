import Image from "next/image";
import React from "react";
import { featuresData } from "@/lib/data";
// ${
//   feature.id === 3 ? "md:w-[22.3%]" : "w-[30%]"
// } ${feature.id === 4 ? "md:w-[35%]" : "md:w-[30%]"} ${feature.id === 5 ? 'md:w-[22.3%]' : 'md:w-[30%]'}
// ${feature.id === 6 ? 'md:w-[24.99%]' : 'md:w-[30%]'}`}
const Features = () => {
  return (
    <div
      className="bg-cover bg-no-repeat md:bg-no-repeat md:bg-cover lg:bg-no-repeat lg:bg-cover xl:bg-contain 2xl:bg-center py-[15%] md:py-[5%] md:px-[2%] 2xl:px-[5%] m-5 md:m-[2%]"
      style={{
        backgroundImage: `url('/feature-bg-2.svg')`,
      }}
    >
      <div className="text-white my-[5%] md:my-0">
        <h1 className="text-xl md:text-4xl font-bold text-center">
          Unlock the Power of Intelligent Knowledge Retrieval
        </h1>
      </div>
      <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-[2%] md:gap-[5%] space-y-[5%] md:space-y-[5%] px-[2%] md:px-[5%] xl:py-[10%]">
        {featuresData.map((feature) => (
          <div
            className={`flex gap-[3%] ${feature.id === 1 ? "mt-[5%]" : "mt-0"}`}
            key={feature.id}
          >
            {/* <div
              className={`hidden lg:flex items-start`}
              
            > */}
              <Image
                src={feature.icon}
                width={100}
                height={1}
                alt="feautre icon"
                className="w-[12%]"
              />
            {/* </div> */}

            <div className="flex-col text-white">
              <h1 className="text-lg md:text-2xl text-center md:text-left font-bold md:font-semibold">
                {feature.title}
              </h1>
              <p className="text-md text-center md:text-left">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
