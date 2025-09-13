import React from "react";

type PlanItemProps = {
  title: string;
  description: string;
  price: number;
};

const PlanItem: React.FC<PlanItemProps> = ({ title, description, price }) => {
  return (
    <div className="bg-[var(--color-black-10)] h-full rounded-[12px] p-[16px] md:p-[30px] flex flex-col justify-between">
      <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold mb-[10px] md:mb-[12px] lg:mb-[16px]">
        {title}
      </h3>
      <span className="text-[var(--color-gray-60)] text-[14px] md:text-[16px] lg:text-[18px] mb-[30px] md:mb-[40px] lg:mb-[50px] max-w-[300px]">
        {description}
      </span>
      <div className="mb-[30px] md:mb-[40px] lg:mb-[50px]">
        <span className="text-[24px] md:text-[30px] lg:text-[40px] font-bold ">
          {price}$
        </span>
        <span className="text-[var(--color-gray-60)]">/month</span>
      </div>

      <div className="flex justify-between gap-[12px] lg:gap-[20px] text-[12px] md:text-[16px] lg:text-[18px] text-nowrap">
        <button className="bg-[var(--color-black-08)] w-full py-[8px] px-[10px] lg:py-[12px] lg:px-[18px] 2xl:py-[18px] 2xl:px-[44px] rounded-[8px] cursor-pointer hover:bg-[var(--color-black-15)] transition-[0.3s]">
          Start Free Trail
        </button>
        <button className="bg-[var(--color-red-45)] w-full py-[8px] px-[10px] lg:py-[12px] lg:px-[18px] 2xl:py-[18px] 2xl:px-[44px] rounded-[8px] cursor-pointer hover:bg-[var(--color-red-65)] transition-[0.3s]">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PlanItem;
