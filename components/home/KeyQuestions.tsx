"use client";
import React, { useEffect, useState } from "react";
import { questionsData } from "@/lib/data";

const KeyQuestions = () => {


  return (
    <div>
      <div className="text-center text-white text-xl lg:text-4xl font-bold my-[10%] md:my-[5%]">
        <h2>Addressing Your Key Questions</h2>
      </div>

      <div className="space-y-4 text-white w-[90%] md:w-[60%] mx-auto">
        {questionsData.map((item) => (
          <details
            className="details group [&_summary::-webkit-details-marker]:hidden transition delay-200 duration-400 ease-in-out overflow-hidden"
            key={item.id}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4">
              <h2 className="text-md md:text-xl font-semibold">
                {item.question}
              </h2>

              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <div className="details_content">
              <p className="mt-4 px-4 leading-relaxed text-sm md:text-xl">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default KeyQuestions;
