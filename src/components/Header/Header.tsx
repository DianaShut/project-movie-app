import css from './Header.module.css'
import logo from './logo.svg'

const Header = () => {
 return (
  <div className={css.Header}>
      <img src={logo} alt="logo"/>
  </div>
 );
};

export {Header};