import React from "react";
import PlanItem from "../PlanItem";

const monthly_plans = [
  {
    title: "Basic Plan",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    price: 9.99,
  },
  {
    title: "Standard Plan",
    description:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    price: 12.99,
  },
  {
    title: "Premium Plan",
    description:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    price: 14.99,
  },
];

const yearly_plans = [
  {
    title: "Basic Plan",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    price: 99.99,
  },
  {
    title: "Standard Plan",
    description:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    price: 139.99,
  },
  {
    title: "Premium Plan",
    description:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    price: 159.99,
  },
];

type PlanListProps = {
  term: "monthly" | "yearly";
};

const PlanList: React.FC<PlanListProps> = ({ term }) => {
  const plans = term === "monthly" ? monthly_plans : yearly_plans;

  return (
    <ul className="flex flex-1 flex-col justify-between xl:flex-row gap-[20px] xl:gap-[30px]">
      {plans.map((plan, i) => (
        <li key={i}>
          <PlanItem
            title={plan.title}
            description={plan.description}
            price={plan.price}
          />
        </li>
      ))}
    </ul>
  );
};

export default PlanList;
