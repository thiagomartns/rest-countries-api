"use client";

import React from "react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";

export const Navigation = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const isDark = colorScheme === "dark" ? true : false;

  return (
    <header
      className={`flex justify-between px-5 py-10 items-center shadow-xl h-[10vh] ${
        isDark ? "bg-very-dark-blue-bg" : ""
      }`}
    >
      <Link
        href="/"
        className={`font-extrabold text-md ${isDark ? "text-white" : ""}`}
      >
        Where in the world?
      </Link>
      <div className="flex items-center gap-3">
        <Switch
          onClick={() =>
            setColorScheme(computedColorScheme === "light" ? "dark" : "light")
          }
          id="theme"
          className={`data-[state=checked]:bg-dark-blue`}
        />
        <Label className={`${isDark ? "text-white" : ""}`} htmlFor="theme">
          Dark Mode
        </Label>
      </div>
    </header>
  );
};
