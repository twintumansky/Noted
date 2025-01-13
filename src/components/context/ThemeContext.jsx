import { useState, createContext } from 'react';

export const ThemeContext = createContext();
export const ThemeProvider = ({ children}) => {
    const [darkMode, setDarkMode] = useState( () => {
        const mode = localStorage.getItem('mode');
        return mode ? JSON.parse(mode): false;
    });

    const value = {
        darkMode,
        toggleDarkMode: () => setDarkMode(prev => !prev),
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
 }
  export default ThemeProvider;