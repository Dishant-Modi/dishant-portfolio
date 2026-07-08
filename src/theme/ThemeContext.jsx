import { createContext, useContext, useEffect, useState } from "react";
import { themes } from "./themes.js";

const STORAGE_KEY = "portfolio-theme";
const ThemeContext = createContext(null);

function getInitialTheme() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && themes.some((t) => t.key === stored)) return stored;
  return themes[0].key;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  function setRandomTheme() {
    const choices = themes.filter((t) => t.key !== theme);
    const pick = choices[Math.floor(Math.random() * choices.length)];
    setTheme(pick.key);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, setRandomTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
