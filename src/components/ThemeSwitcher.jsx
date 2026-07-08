import { useEffect, useRef, useState } from "react";
import { useTheme } from "../theme/ThemeContext.jsx";

export default function ThemeSwitcher() {
  const { theme, setTheme, setRandomTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="theme-switcher" ref={ref}>
      <button className="theme-switcher-trigger" onClick={() => setOpen((o) => !o)}>
        Theme
      </button>
      {open && (
        <div className="theme-switcher-panel">
          {themes.map((t) => (
            <button
              key={t.key}
              className={theme === t.key ? "active" : ""}
              onClick={() => {
                setTheme(t.key);
                setOpen(false);
              }}
            >
              {t.label}
            </button>
          ))}
          <button
            onClick={() => {
              setRandomTheme();
              setOpen(false);
            }}
          >
            Random
          </button>
        </div>
      )}
    </div>
  );
}
