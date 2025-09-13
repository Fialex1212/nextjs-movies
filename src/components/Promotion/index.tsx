import React from "react";

const Promotion = () => {
  return (
    <div className="container flex items-center">
      <div className="bg-[linear-gradient(180deg,#0F0F0F_5%,#140F0F_13%,#220E0E_33%,rgba(229,0,0,0)_100%),url('/promotion-bg.png')] md:bg-[linear-gradient(90deg,#0F0F0F_2%,#140F0F_16%,#220E0E_28%,rgba(229,0,0,0)_100%),url('/promotion-bg.png')] w-full bg-cover bg-center my-[40px] md:my-[60px] lg:my-[75px] py-[50px] px-[30px] md:py-[80px] md:px-[60px] lg:py-[100px] lg:px-[80px] flex flex-col md:justify-between items-center md:flex-row text-center rounded-[12px] border-[var(--color-black-15)] border-[1px]">
        <div className="flex flex-col items-center md:items-start md:mr-[40px]">
          <h3 className="text-[24px] md:text-[28px] lg:text-[48px] mb-[10px] lg:mb-[14px]">
            Start your free trial today!
          </h3>
          <span className="text-[var(--color-gray-60)] md:text-start text-[14px] md:text-[16px] lg:text-[18px] mb-[50px] md:mb-[0px]">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </span>
        </div>
        <button className="w-[150px] lg:w-[200px] h-[50px] lg:h-[63px] bg-[var(--color-red-45)] flex justify-center items-center rounded-[8px] px-[20px] py-[14px] lg:px-[24px] lg:py-[18px] text-[14px] lg:text-[18px] cursor-pointer hover:bg-[var(--color-red-60)] transition-[0.3s]">
          Start a Free Trail
        </button>
      </div>
    </div>
  );
};

export default Promotion;
