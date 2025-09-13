"use client";

import React, { useState, useRef, useEffect } from "react";

const faqs = [
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

export default function TwoColumnAccordion() {
  const [openItem, setOpenItem] = useState(null);

  // component for smooth collapsing
  const AccordionItem = ({ item }) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
      if (openItem === item.id) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        setHeight(0);
      }
    }, [openItem]);

    return (
      <div className="border-b border-gray-200">
        <button
          className="w-full text-left py-3 font-medium flex justify-between items-center"
          onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
        >
          {item.id} - {item.question}
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
        <div
          ref={contentRef}
          style={{
            maxHeight:
              openItem === item.id && contentRef.current
                ? `${contentRef.current.scrollHeight}px`
                : "0px",
          }}
          className="overflow-hidden transition-all duration-300 ease-in-out"
        >
          <p className="py-2 text-gray-700">{item.answer}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px]">
      <div>
        {faqs
          .filter((_, idx) => idx <= 3)
          .map((item) => (
            <AccordionItem key={item.id} item={item} />
          ))}
      </div>
      <div>
        {faqs
          .filter((_, idx) => idx >= 4)
          .map((item) => (
            <AccordionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
