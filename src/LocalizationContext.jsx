import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const LocalizationContext = createContext();

export const useLocalization = () => {
  return useContext(LocalizationContext);
};

export function LocalizationProvider({ children }) {
  const [locale, setLocale] = useState("en");
  const localizedString = {
    en: {
      greeting: "Hello, World!",
      welcome: "Welcome to my app!",
    },
    hi: {
      greeting: "नमस्ते दुनिया!",
      welcome: "मेरे ऐप में स्वागत है!",
    },
  };

  const translate = (key) => {
    return localizedString[locale][key];
  };

  return (
    <LocalizationContext.Provider
      value={{ locale, setLocale, localizedString, translate }}
    >
      {children}
    </LocalizationContext.Provider>
  );
}

LocalizationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
