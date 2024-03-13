"use client";

import React from "react";
import { Label } from "../ui/label";

import Link from "next/link";

import { ThemeSwitcher } from "../theme-switcher";

export const Navigation = () => {
  return (
    <header
      className={`flex justify-between px-5 py-10 items-center shadow-xl h-[10vh] `}
    >
      <Link href="/" className={`font-extrabold text-md `}>
        Where in the world?
      </Link>
      <div className="flex items-center gap-3">
        <ThemeSwitcher />
        <Label htmlFor="theme">Dark Mode</Label>
      </div>
    </header>
  );
};
