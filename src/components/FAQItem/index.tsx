import React, { useRef, useState } from "react";

type FAQItemType = {
  id: string;
  question: string;
  answer: string;
};

type FAQItemProps = {
  item: FAQItemType;
};

const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative py-[44px] md:py-[24px] lg:py-[30px]">
      <button
        className="w-full text-left font-medium flex justify-between items-center"
        onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
      >
        <div className="flex items-center gap-[16px] lg:gap-[24px]">
          <div className="bg-[var(--color-black-12)] rounded-[8px] p-[12px] md:p[16px] lg:p-[20px]">
            <p className="w-[20px] h-[20px]">{item.id}</p>
          </div>
          <p className="text-[18px] md:text-[20px] lg:text-[22px]">
            {item.question}
          </p>
        </div>

        <span className="ml-2">
          {openItem === item.id ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          )}
        </span>
      </button>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

      <div
        ref={contentRef}
        style={{
          maxHeight:
            openItem === item.id
              ? `${contentRef.current?.scrollHeight}px`
              : "0px",
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <p className="py-2 text-[14px] md:text-[16px] lg:text-[18px] text-[var(--color-gray-60)]">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
