import {FC} from "react";

import {IMovie} from "../../../interfaces";
import css from './Movie.module.css'
import {useNavigate, useParams} from "react-router-dom";

interface IProps {
    movie: IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const{id, title, poster_path} = movie
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const navigate = useNavigate()

 return (
  <div className={css.Movie} onClick={()=> navigate(`/movie/${id}`)}>

      <img src={imageUrl} alt={title}/>
      <div className={css.title}>{title}</div>
  </div>
 );
};

export {Movie};