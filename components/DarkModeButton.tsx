"use client";

import { useEffect } from "react";

export const DarkModeButton = () => {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <button
      onClick={() => {
        document.documentElement.classList.toggle("dark");
        if (localStorage.getItem("theme") === "dark") {
          localStorage.setItem("theme", "light");
        } else {
          localStorage.setItem("theme", "dark");
        }
      }}
    >
      da button
    </button>
  );
};
