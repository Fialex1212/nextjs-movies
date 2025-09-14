"use client";

import React from "react";
import FAQItem from "../FAQItem";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "01",
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    id: "02",
    question: "How much does StreamVibe cost?",
    answer:
      "StreamVibe offers multiple subscription plans. You can choose monthly or yearly plans depending on your preference.",
  },
  {
    id: "03",
    question: "What content is available on StreamVibe?",
    answer:
      "StreamVibe has a wide range of movies, TV shows, and exclusive content across different genres.",
  },
  {
    id: "04",
    question: "How can I watch StreamVibe?",
    answer:
      "You can watch StreamVibe on smartphones, tablets, smart TVs, laptops, gaming consoles, and VR headsets through our app or web platform.",
  },
  {
    id: "05",
    question: "How do I sign up for StreamVibe?",
    answer:
      "Sign up by creating an account on our website or app using your email or social login.",
  },
  {
    id: "06",
    question: "What is the StreamVibe free trial?",
    answer:
      "StreamVibe offers a free trial period for new users to explore our content before subscribing.",
  },
  {
    id: "07",
    question: "How do I contact StreamVibe customer support?",
    answer:
      "You can contact our customer support via email, live chat on our website, or through the app’s support section.",
  },
  {
    id: "08",
    question: "What are the StreamVibe payment methods?",
    answer:
      "StreamVibe accepts major credit cards, PayPal, and other digital payment options depending on your region.",
  },
];

const FAQList = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px]">
      <div>
        {faqs.slice(0, 4).map((item) => (
          <FAQItem key={item.id} item={item} />
        ))}
      </div>
      <div>
        {faqs.slice(4).map((item) => (
          <FAQItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FAQList;
