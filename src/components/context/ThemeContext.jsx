// import { useState, createContext } from 'react';

// export const ThemeContext = createContext();
// export const ThemeProvider = ({ children}) => {
//     const [darkMode, setDarkMode] = useState( () => {
//         const mode = localStorage.getItem('mode');
//         return mode ? JSON.parse(mode): false;
//     });

//     const value = {
//         darkMode,
//         toggleDarkMode: () => setDarkMode(prev => !prev),
//     };

//     return (
//         <ThemeContext.Provider value={value}>
//             {children}
//         </ThemeContext.Provider>
//     )
//  }
//   export default ThemeProvider;

//This includes the ThemeTransition event
import { createContext, useState } from "react";
import ThemeTransition from "../ThemeTransition";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleDarkMode = () => {
    setIsTransitioning(true);
    setDarkMode(!darkMode);
    
    // Reset transition state after animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {isTransitioning && <ThemeTransition isDark={darkMode} />}
      {children}
    </ThemeContext.Provider>
  );
}

