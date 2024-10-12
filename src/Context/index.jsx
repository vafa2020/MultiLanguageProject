import { createContext, useContext, useState } from "react";

const ThemeDarkMode = createContext("");
const ThemeDarkModeDispatch = createContext(() => {});

import React from "react";

const ThemeDarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeDarkMode.Provider value={theme}>
      <ThemeDarkModeDispatch.Provider value={setTheme}>
        {children}
      </ThemeDarkModeDispatch.Provider>
    </ThemeDarkMode.Provider>
  );
};

export default ThemeDarkModeProvider;

export const useDarkMode = () => useContext(ThemeDarkMode);
export const useDarkModeDispatch = () => useContext(ThemeDarkModeDispatch);
