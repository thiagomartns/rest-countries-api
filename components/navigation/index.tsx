"use client";

import React from "react";

import Link from "next/link";

import { ThemeSwitcher } from "../theme-switcher";

export const Navigation = () => {
  return (
    <header className="flex items-center shadow-xl h-[10vh] fixed top-0 w-[100vw] bg-inherit z-10">
      <div className="flex p-8 md:p-5 justify-between w-full items-center lg:max-w-[1400px] lg:my-0 lg:mx-auto">
        <Link href="/" className="font-extrabold text-xl lg:text-3xl">
          Where in the world?
        </Link>
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
