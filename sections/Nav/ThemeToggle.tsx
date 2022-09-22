import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkTheme = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 transition rounded hover:shadow-inner hidden md:block ${
        isDarkTheme ? "hover:bg-yellow-100" : "hover:bg-sky-100"
      } `}
      title="Toggle theme"
    >
      {isDarkTheme ? <SunIcon className="w-6 h-6 text-yellow-500" /> : <MoonIcon className="w-6 h-6 text-blue-500" />}
    </button>
  );
}

export default ThemeToggle;
