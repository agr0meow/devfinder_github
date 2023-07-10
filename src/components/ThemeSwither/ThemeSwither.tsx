import styles from "./ThemeSwither.module.scss";
import { ReactComponent as MonIcon } from "assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "assets/icon-sun.svg";
import { useEffect, useState } from "react";

export const ThemeSwither = () => {
  const [isDark, setIsDark] = useState(false);
  const themeText = isDark ? "Light" : "Dark";
  const ThemeIcon = isDark ? SunIcon : MonIcon;
  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);
  return (
    <div className={styles.switcher} onClick={() => setIsDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
