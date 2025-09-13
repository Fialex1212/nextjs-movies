import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#141414_10%,rgba(229,0,0,0)_100%),linear-gradient(0deg,#141414_10%,rgba(229,0,0,0)_100%),url('/promotion-bg.png')]">
      <div className="container relative z-[0]">
        <div className="text-center flex flex-col items-center ">
          <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[470px] lg:h-[470px] mb-[50px] md:mb-[100px] lg:mb-[130px] mt-[150px] md:mt-[200px]">
            <Image src={"/logo.svg"} alt="logo" width={470} height={470} />
          </div>
          <h2 className="text-[28px] md:text-[48px] lg:text-[58px] font-bold mb-[10px] lg:mb-[14px]">
            The Best Streaming Experience
          </h2>
          <p className="text-[14px] lg:text-[18px] text-[var(--color-gray-60)] mb-[30px] md:mb-[40px] lg:mb-[50px]">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <button className="flex gap-[4px] text-[14px] lg:text-[18px] py-[15px] px-[24px] lg:py-[18px] bg-[var(--color-red-45)] hover:bg-[var(--color-red-60)] rounded-[8px]">
            <Image src={"/icons/play.svg"} alt="play" width={24} height={24} />
            <p>Start Watching Now</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
