import { useTheme } from "./NineteenTheme/ThemeContext";

export default function Nineteen() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>
      <label>
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        {isDarkMode?"Dark Mode":"Light Mode"}
      </label>
    </div>
  );
}
