import React from "react";
import FAQList from "../FAQList";

const FAQ = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center my-[40px] md:my-[60px] lg:my-[75px]">
        <div className="flex flex-col md:items-end md:flex-row md:justify-between mb-[40px] md:mb-[60px] lg:mb-[80px]">
          <div className="md:w-[70%] mb-[20px] md:mb-[0px]">
            <h2 className="font-bold text-[18px] md:text-[28px] lg:text-[38px] mb-[10px] lg:mb-[14px]">
              Frequently Asked Questions
            </h2>
            <span className="text-[12px] md:text-[16px] lg:text-[18px] text-[var(--color-gray-60)]">
              Got questions? We`ve got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </span>
          </div>
          <button className="bg-[var(--color-red-45)] text-[14px] mb:text-[16px] lg:text-[18px] font-bold w-fit h-fit py-[12px] px-[14px] lg:py-[12px] lg:px-[18px] 2xl:py-[18px] 2xl:px-[44px] rounded-[8px] cursor-pointer hover:bg-[var(--color-red-65)] transition-[0.3s]">
            Ask a Question
          </button>
        </div>
        <FAQList />
      </div>
    </div>
  );
};

export default FAQ;
