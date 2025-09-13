import Image from "next/image";
import React from "react";

type DeviceListProps = {
  icon: string;
  title: string;
  description: string;
};

const DeviceItem: React.FC<DeviceListProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-[var(--color-black-10)] bg-gradient-to-bl from-[#a82020a2] to-[#ffffff00] bg-blend-overlay  flex flex-col rounded-[12px] border-1 border-[var(--color-black-15)] p-[24px] md:p-[40px] lg:p-[50px]">
      <div className="flex items-center gap-[10px] md:gap-[12px] lg:gap-[16px] mb-[20px] md:mb-[24px] lg:mb-[30px]">
        <div className="flex justify-center items-center bg-[var(--color-black-20)] rounded-[10px] p-[10px] md:p-[12px] lg:p-[16px]">
          <div className="image__wrapper flex justify-center items-center w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]">
            <Image width={40} height={40} src={icon} alt={title} />
          </div>
        </div>

        <h3 className="font-bold text-[18px] md:text-[20px] lg:text-[24px]">{title}</h3>
      </div>
      <span className="text-[12px] md:text-[16px] lg:text-[18px] text-[var(--color-gray-60)]">
        {description}
      </span>
    </div>
  );
};

export default DeviceItem;
