"use client";

import { useMantineColorScheme } from "@mantine/core";

export default function Home() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark" ? true : false;

  return (
    <h1 className={`font-semibold ${isDark ? "text-white" : ""}`}>hello</h1>
  );
}
