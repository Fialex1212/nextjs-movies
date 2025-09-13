"use client";

import React, { useState } from "react";
import PlanList from "../PlanList";
import PlanButtons from "../PlanButtons";

const Plans = () => {
  const [term, setTerm] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="container">
      <div className="flex flex-col justify-center my-[40px] md:my-[60px] lg:my-[75px]">
        <div className="flex flex-col md:items-end md:flex-row md:justify-between mb-[40px] md:mb-[60px] lg:mb-[80px]">
          <div className="md:w-[70%] mb-[20px] md:mb-[0px]">
            <h2 className="font-bold text-[18px] md:text-[28px] lg:text-[38px] mb-[10px] lg:mb-[14px]">
              {`Choose the plan that's right for you`}
            </h2>
            <span className="text-[12px] md:text-[16px] lg:text-[18px] text-[var(--color-gray-60)]">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
            </span>
          </div>
            <PlanButtons term={term} setTerm={setTerm} />
        </div>
        <PlanList term={term} />
      </div>
    </div>
  );
};

export default Plans;
