import {FC, useContext} from "react";
import {ThemeContext} from "../../../hoc";
import css from './ThemeSwitch.module.css'

const ThemeSwitch:FC= () => {
    const [theme, setTheme] = useContext(ThemeContext)

    const changeTheme = () =>{
        setTheme(theme === "dark" ? "light" : "dark")
    }
 return (
  <div>
      <div>
          <div className={css.theme} onClick={changeTheme}>THEME</div>
      </div>
  </div>
 );
};

export {ThemeSwitch};