"use client";

import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import React, { useEffect, useState } from "react";

const navs = [
  {
    title: "Home",
    link: "home",
  },
  {
    title: "Movies & Shows",
    link: "movies-and-shows",
  },
  {
    title: "Support",
    link: "support",
  },
  {
    title: "Subscriptions",
    link: "subscriptions",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  // блокировка скролла body когда меню открыто
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // закрыть по Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className="container">
        <div className="flex justify-between py-[20px]">
          <Link
            href={"/home"}
            className="image__wrapper flex justify-center w-[116px] h-[35px] md:w-[165px] md:h-[50px] lg:w-[200px] lg:h-[60px]"
          >
            <Image src={"/icons/logo.svg"} alt="logo" width={200} height={60} />
          </Link>
          <nav className="hidden lg:block bg-[var(--color-black-06)] border border-[var(--color-black-15)] p-[8px] lg:p-[10px] rounded-[10px]">
            <ul className="flex gap-[6px]">
              {navs.map((nav, i) => (
                <li key={i}>
                  <Link
                    className="block w-full h-full hover:bg-[var(--color-black-10)] transition-[0.3s] py-[12px] px-[20px] lg:py-[14px] lg:px-[24px] rounded-[8px]"
                    href={nav.link}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:flex gap-[14px] lg:gap-[30px]">
            <button
              className="cursor-pointer"
              onClick={() => console.log("search")}
            >
              <Image
                src={"/icons/search.svg"}
                alt="search"
                width={25.5}
                height={25.5}
              />
            </button>
            <button
              className="cursor-pointer"
              onClick={() => console.log("search")}
            >
              <Image
                src={"/icons/notifications.svg"}
                alt="notifications"
                width={25.5}
                height={25.5}
              />
            </button>
          </div>
          <button
            className="lg:hidden flex bg-[var(--color-black-10)] transition-[0.3s] p-[12px] h-min border border-[var(--color-black-15)] rounded-[8px] cursor-pointer"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <div className="w-[24px] h-[24px] flex justify-center items-center">
              <Image
                src={"/icons/burger-menu.svg"}
                alt="burger-menu"
                width={24}
                height={24}
              />
            </div>
          </button>
          <div
            onClick={() => setOpen(false)}
            className={classNames(
              "fixed inset-0 bg-black/40 z-40 transition-opacity duration-300",
              {
                "opacity-100 pointer-events-auto": open,
                "opacity-0 pointer-events-none": !open,
              }
            )}
            aria-hidden={!open}
          />
          <aside
            className={classNames(
              "fixed top-0 right-0 h-full w-[85%] max-w-xs bg-[var(--color-black-15)] z-50 shadow-lg transform transition-transform duration-300",
              // можно поменять right->left и translate-x-full -> -translate-x-full если хотим слева
              { "translate-x-0": open, "translate-x-full": !open }
            )}
            role="dialog"
            aria-modal="true"
            aria-hidden={!open}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="text-lg font-semibold">Menu</div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md focus:outline-none focus:ring"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="px-4 py-6">
              <ul className="flex flex-col gap-3">
                {navs.map((nav, i) => (
                  <li key={i}>
                    <Link
                      href={nav.link}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded-md hover:bg-gray-100 transition"
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Header;
