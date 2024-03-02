import {createContext, FC, PropsWithChildren, useState} from "react";

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
};

interface IProps extends PropsWithChildren {

}

const ThemeContext = createContext<ThemeContextType | null>(null)

const ContextProvider:FC<IProps> = ({children}) => {
    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };
    const value = { theme, toggleTheme };
 return (
  <div>
   <ThemeContext.Provider value={value}>
       {children}
   </ThemeContext.Provider>
  </div>
 );
};

export {ContextProvider, ThemeContext};