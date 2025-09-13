import Image from "next/image";
import Link from "next/link";
import React from "react";

const menu = [
  {
    title: "Home",
    link: "/",
    children: [
      { title: "Categories", link: "/categories" },
      { title: "Devices", link: "/devices" },
      { title: "Pricing", link: "/pricing" },
      { title: "FAQ", link: "/faq" },
    ],
  },
  {
    title: "Movies",
    link: "/movies",
    children: [
      { title: "Genres", link: "/movies/genres" },
      { title: "Trending", link: "/movies/trending" },
      { title: "New Release", link: "/movies/new" },
      { title: "Popular", link: "/movies/popular" },
    ],
  },
  {
    title: "Shows",
    link: "/shows",
    children: [
      { title: "Genres", link: "/shows/genres" },
      { title: "Trending", link: "/shows/trending" },
      { title: "New Release", link: "/shows/new" },
      { title: "Popular", link: "/shows/popular" },
    ],
  },
  {
    title: "Support",
    link: "/support",
    children: [{ title: "Contact Us", link: "/support/contact" }],
  },
  {
    title: "Subscription",
    link: "/subscription",
    children: [
      { title: "Plans", link: "/subscription/plans" },
      { title: "Features", link: "/subscription/features" },
    ],
  },
];

const buttons = {
  title: "Connect With Us",
  link: "/connect",
  children: [
    { title: "Title", link: "/connect/title-1", icon: "/icons/facebook.svg" },
    { title: "Title", link: "/connect/title-2", icon: "/icons/twitter.svg" },
    { title: "Title", link: "/connect/title-3", icon: "/icons/linkedin.svg" },
  ],
};

const Footer = () => {
  return (
    <div className="bg-[var(--color-black-06)] mt-[40px] md:mt-[60px] lg:mt-[75px]">
      <div className="container">
        <ul className="grid grid-cols-2 md:flex md:flex-row md:justify-between gap-4 mb-[50px] md:mb-[80px] pt-[50px] md:pt-[80px]">
          {menu.map((item, i) => (
            <li key={i}>
              {item.children ? (
                <>
                  <span className="block mb-[16px] md:mb-[20px] text-[16px] md:text-[18px] lg:text-[20px]">
                    {item.title}
                  </span>

                  <ul className="flex flex-col text-[14px] md:text-[16px] lg:text-[18px] gap-[8px] md:gap-[10px] lg:gap-[14px]">
                    {item.children.map((child, j) => (
                      <li key={j}>
                        <Link
                          className="hover:text-white transition-[0.3s] text-[var(--color-gray-60)]"
                          href={child.link}
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={item.link}>{item.title}</a>
              )}
            </li>
          ))}

          <li>
            <span className="block mb-[16px] md:mb-[20px] text-[16px] md:text-[18px] lg:text-[20px]">
              {buttons.title}
            </span>
            <ul className="flex gap-[10px] justify-center">
              {buttons.children.map((child, i) => (
                <li
                  className="w-[44px] h-[44px] lg:w-[56px] lg:h-[56px] bg-[var(--color-black-15)] rounded-[8px] flex justify-center items-center cursor-pointer hover:bg-[var(--color-black-25)] transition-[0.3s]"
                  key={i}
                >
                  <Link className="" href={child.link}>
                    <Image
                      className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                      width={24}
                      height={24}
                      src={child.icon}
                      alt={child.title}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <div className="flex flex-col pt-[20px] sm:flex-row sm:justify-between sm:pt-[24px] border-t-2 border-[var(--color-black-15)] pb-[20px] sm:pb-[50px]">
          <span className="text-[var(--color-gray-60)] mb-[20px] sm:mb-[0px]">
            @2025 Fialex1212, All Rights Reserved
          </span>
          <ul className="flex gap text-[12px] sm:text-[14px] lg:text-[16px]">
            <li className="pr-[15px]">
              <Link
                className="hover:text-white transition-[0.3s] text-[var(--color-gray-60)]"
                href={"/terms-of-use"}
              >
                Terms of Use
              </Link>
            </li>
            <li className="px-[15px] border-l-2 border-r-2 border-[var(--color-black-15)]">
              <Link
                className="hover:text-white transition-[0.3s] text-[var(--color-gray-60)]"
                href={"/privacy-policy"}
              >
                Privacy Policy
              </Link>
            </li>
            <li className="pl-[15px]">
              <Link
                className="hover:text-white transition-[0.3s] text-[var(--color-gray-60)]"
                href={"/cookie-policy"}
              >
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
