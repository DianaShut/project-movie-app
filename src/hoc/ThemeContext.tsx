import {createContext, FC, PropsWithChildren, useEffect} from "react";
import {useLocalStorage} from "../hooks";

type ThemeContextType = {
    any
};

interface IProps extends PropsWithChildren {

}

const ThemeContext = createContext<ThemeContextType | null>(null)

const ContextProvider:FC<IProps> = ({children}) => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    useEffect(() => {
        if (theme === 'light') document.body.classList.add('light')
        else document.body.classList.remove('light')
    }, [theme]);

 return (
  <div>
   <ThemeContext.Provider value={[theme, setTheme]}>
       {children}
   </ThemeContext.Provider>
  </div>
 );
};

export {ContextProvider, ThemeContext};