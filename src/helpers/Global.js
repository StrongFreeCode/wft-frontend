import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const [startDate, setStartDate] = useState(new Date());
  const [minPrice, setMinPrice] = useState(0);
  const minDate = new Date();
  

  return (
    <GlobalContext.Provider value={{ startDate, setStartDate, minPrice, setMinPrice, minDate, language, setLanguage }}>
      {children}
    </GlobalContext.Provider>
  )
};

export function useGlobalContext() {
  return useContext(GlobalContext)
}