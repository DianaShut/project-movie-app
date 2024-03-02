import {FC} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Rating} from "@mui/material";

import {IMovie} from "../../../interfaces";
import css from './Movie.module.css'


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
      {/*<Rating className={css.Rating} name="customized-10" defaultValue={vote_average} precision={0.1} max={10} size="small" readOnly/>*/}
  </div>
 );
};

export {Movie};