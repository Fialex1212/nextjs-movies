import React from "react";
import classNames from "classnames";

type PlanButtonsProps = {
  term: "monthly" | "yearly";
  setTerm: (t: "monthly" | "yearly") => void;
};

const PlanButtons: React.FC<PlanButtonsProps> = ({ term, setTerm }) => {
  return (
    <div className="flex w-fit gap-[2px] bg-[var(--color-black-06)] p-[10px] rounded-[10px] border-1 border-[var(--color-black-15)]">
      {["monthly", "yearly"].map((t) => (
        <button
          key={t}
          onClick={() => setTerm(t as "monthly" | "yearly")}
          className={classNames(
            "text-[14px] md:text-[16px] lg:text-[18px] font-bold py-[14px] px-[24px] rounded-[8px] cursor-pointer transition-colors",
            term === t
              ? "bg-[var(--color-black-20)]"
              : "hover:bg-[var(--color-black-20)]"
          )}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default PlanButtons;
