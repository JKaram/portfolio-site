import React, { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useMediaQuery from "../hooks/useMediaQuery";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }: { children: React.ReactNode }) => {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [isDarkTheme, setTheme] = useLocalStorage("prefersDarkTheme", isDarkOS ?? false);

  const toggleTheme = () => {
    setTheme(!isDarkTheme);
  };

  return <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
