"use client";

import { useState } from "react";
import { NavigationDatabaseResult } from "@/lib/notion/types";
import { DarkModeButton } from "@/components/DarkModeButton";

interface Props {
  headerLinks: NavigationDatabaseResult;
}

export const Navbar = ({ headerLinks }: Props) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full px-4 py-2 bg-white dark:bg-black bg-opacity-20 backdrop-blur-lg rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
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
            <ul className="flex flex-col px-4 mt-4 mx-2 border-gray-100 rounded-b-xl md:rounded-br-none md:rounded-bl-none md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   dark:border-gray-700">
              {headerLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    <a
                      className="block w-full py-2"
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
        <DarkModeButton />
      </div>
    </nav>
  );
};
