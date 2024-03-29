import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { motion } from "framer-motion";
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
    <motion.div
    whileHover={{
      scale: 1.1,
    }}
    >
      <DarkModeSwitch
        checked={theme === "dark"}
        onChange={handleThemeSwitch}
        size={32}
      />
    </motion.div>
  );
}
