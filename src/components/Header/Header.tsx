import {NavLink} from "react-router-dom";
import css from './Header.module.css'
import logo from './logo.svg'
import {ThemeSwitch} from "./ThemeSwitch";



const Header = () => {


 return (
  <div className={css.Header}>
      <img src={logo} alt="logo"/>
      <div className={css.toolbar}>
          <NavLink to={'movies'}>HOME</NavLink>
          <div className={css.switcher}>
              <ThemeSwitch/>
          </div>
      </div>
  </div>
 );
};

export {Header};