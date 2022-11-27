"use client";

import { useState } from "react";
import Image from "next/image";
import { NavigationDatabaseResult } from "@/lib/notion/types";

interface Props {
  headerLinks: NavigationDatabaseResult;
}

export const Navbar = ({ headerLinks }: Props) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="fixed w-full p-4 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="h-16 relative flex items-center gap-4">
          <span className="block relative w-16 h-16">
            <Image
              src="https://avatars.githubusercontent.com/u/35677084?v=4"
              className="rounded-full"
              alt="Anthony Shew"
              sizes="64px"
              fill
            />
          </span>
          <p className="text-white">Anthony Shew</p>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <span className="sr-only"> Open main menu </span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isMobileOpen ? "" : "hidden"
          } w-full h-full md:relative md:block md:top-0 md:w-auto`}
        >
          <div
            className={`${
              isMobileOpen ? "" : "hidden"
            } w-full absolute left-0 top-18 md:relative md:block md:top-0 md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col p-4 mt-4 mx-2 border-gray-100 rounded-b-xl md:rounded-br-none md:rounded-bl-none bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {headerLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    <a
                      className="block w-full"
                      href={link.properties.Slug.rich_text
                        .map((el) => el.plain_text)
                        .join()}
                    >
                      {link.properties.Title.title[0].plain_text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
