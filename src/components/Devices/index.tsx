import React from "react";
import DeviceList from "../DeviceList";

const Devices = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center my-[40px] md:my-[60px] lg:my-[75px]">
        <div className="mb-[40px] md:mb-[60px] lg:mb-[80px] md:w-[80%]">
          <h2 className="font-bold text-[18px] md:text-[28px] lg:text-[38px] mb-[10px] lg:mb-[14px]">
            We Provide you streaming experience across various devices.
          </h2>
          <span className="text-[12px] mb:text-[16px] lg:text-[18px] text-[var(--color-gray-60)]">
            With StreamVibe, you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is designed to be compatible with a
            wide range of devices, ensuring that you never miss a moment of
            entertainment.
          </span>
        </div>
        <DeviceList />
      </div>
    </div>
  );
};

export default Devices;
