import {FC} from "react";

import {IGenre} from "../../../interfaces";
import css from './Genre.module.css'
import {NavLink, useNavigate} from "react-router-dom";

interface IProps {
    genre: IGenre
}
const Genre:FC<IProps> = ({genre}) => {
    const{id, name} = genre;

 return (
  <div>
   <div className={css.genre}>
       <NavLink to={`/genres/${id}`}>{name}</NavLink>
   </div>
  </div>
 );
};

export {Genre};