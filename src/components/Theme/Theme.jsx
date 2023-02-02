import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Theme() {
  const [theme, setTheme] = useState(localStorage.theme || "light");

  useEffect(() => {
    if (
      theme === "dark" ||
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const isDarkMode = (theme) => {
    return theme === "dark";
  };

  const handleThemeSwitch = () => {
    setTheme((current) => {
      if (current === "dark") {
        localStorage.theme = "light";
        return "light";
      } else {
        localStorage.theme = "dark";
        return "dark";
      }
    });
  };
  return (
    <DarkModeSwitch
      style={{ marginBottom: "2rem" }}
      checked={theme === "dark"}
      onChange={handleThemeSwitch}
      size={32}
      className="absolute top-4 right-4 z-30 md:fixed md:right-[0.95rem] md:bottom-[12%]"
    />
  );
}
