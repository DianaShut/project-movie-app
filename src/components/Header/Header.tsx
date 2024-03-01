import css from './Header.module.css'
import logo from './logo.svg'
import {NavLink} from "react-router-dom";

const Header = () => {
 return (
  <div className={css.Header}>
      <img src={logo} alt="logo"/>
      <div className={css.toolbar}>
          <NavLink to={'movies'}>HOME</NavLink>
      </div>
  </div>
 );
};

export {Header};