import React from "react";

const Slider = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center mt-[100px] mb-[40px] md:mb-[60px] md:mt-[150px] lg:mb-[75px] lg:mt-[200px]">
        <div className="flex flex-col md:items-end md:flex-row md:justify-between mb-[40px] md:mb-[60px] lg:mb-[80px]">
          <div className="md:w-[70%] mb-[20px] md:mb-[0px]">
            <h2 className="font-bold text-[18px] md:text-[28px] lg:text-[38px] mb-[10px] lg:mb-[14px]">
              Explore our wide variety of categories
            </h2>
            <span className="text-[12px] md:text-[16px] lg:text-[18px] text-[var(--color-gray-60)]">
              {`Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new`}
            </span>
          </div>
          <button>swipe</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;