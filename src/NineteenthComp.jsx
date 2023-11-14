import { useTheme } from "./NineteenTheme/ThemeContext";

export default function NineteenthComp() {
  const { isDarkMode } = useTheme();
  const themeClass = isDarkMode ? "dark-theme" : "light-theme";
  const backgroundColorClass = isDarkMode ? "bg-gray-800" : "bg-gray-100";
  const textColorClass = isDarkMode ? "text-white" : "text-black";

  return (
    <div className={`container ${themeClass} ${backgroundColorClass} `}>
      <p className={` ${textColorClass}`}>This component uses the selected theme</p>
    </div>
  );
}
