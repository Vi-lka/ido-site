"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function handleChange() {
    resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label="Toggle theme"
      className="px-3 py-5"
      onClick={handleChange}
    >
      <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 sm:h-[1.2rem] sm:w-[1.2rem]" />
      <Moon className="h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 sm:h-[1.2rem] sm:w-[1.2rem] absolute" />
    </Button>
  );
}
