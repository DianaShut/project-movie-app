import {FC} from "react";
import {Rating} from "@mui/material";

import css from './MovieDetails.module.css'
import {IInfo} from "../../../interfaces/infoInterface";

interface IProps {
    movieDetails: IInfo
}
const MovieDetails:FC<IProps> = ({movieDetails}) => {
    const {id, title, original_title, original_language, release_date, vote_count, video, backdrop_path, poster_path, overview, adult,  popularity, vote_average} = movieDetails;
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
 return (
  <div className={css.MoviesDetails}>
      <img src={imageUrl} alt={title}/>
      <div className={css.infoBlock}>
          <div className={css.info}>
              <h1 className={css.title}>{title}</h1>
              <Rating className={css.Rating} name="customized-10" defaultValue={vote_average} precision={0.1} max={10} size="small" readOnly />
              <p className={css.title}>{original_title}</p>
              <div>Original title: {original_title}</div>
              <br/>
              <div>Original language: {original_language}</div>
              <br/>
              <div>Release date: {release_date}</div>
              <div>{movieDetails.genres.name}</div>
          </div>
          <div className={css.overview}>
              {overview}
          </div>
      </div>
  </div>
 );
};

export {MovieDetails};