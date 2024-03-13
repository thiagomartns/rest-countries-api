"use client";

import React from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

import Link from "next/link";

export const Navigation = () => {
  return (
    <header
      className={`flex justify-between px-5 py-10 items-center shadow-xl h-[10vh] `}
    >
      <Link href="/" className={`font-extrabold text-md `}>
        Where in the world?
      </Link>
      <div className="flex items-center gap-3">
        <Switch id="theme" className={`data-[state=checked]:bg-dark-blue`} />
        <Label htmlFor="theme">Dark Mode</Label>
      </div>
    </header>
  );
};
