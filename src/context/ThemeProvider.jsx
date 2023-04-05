import React, { useContext, useState } from "react";

import { changeCSSVaribles } from "@service/changeCSSVaribles";

export const THEME_GRIFF = 'griff';
export const THEME_SLITH = 'slith';
export const THEME_COGT = 'cogt';
export const THEME_HUFF= 'huff';

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children, ...props }) => {
    const [theme, setTheme] = useState(null);

    const change = name => {
        setTheme(name);
        changeCSSVaribles(name);
    }

    return (
        <ThemeContext.Provider 
            value={{
                theme,
                change
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);