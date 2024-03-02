import css from './Header.module.css'
import logo from './logo.svg'
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import { Switch, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import {ThemeContext} from "../../hoc";



const Header = () => {
    const value = useContext(ThemeContext)


 return (
  <div className={css.Header}>
      <img src={logo} alt="logo"/>
      <div className={css.toolbar}>
          <NavLink to={'movies'}>HOME</NavLink>
          <div className={css.switcher}>
              <FormControlLabel
                  control={<Switch className={css.switch}  checked={value.theme === 'light'} onChange={value.toggleTheme} />}
                  label="Light Mode"/>
          </div>
      </div>
  </div>
 );
};

export {Header};