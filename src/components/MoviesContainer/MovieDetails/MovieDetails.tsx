import {FC} from "react";
import {IMovie} from "../../../interfaces";
import css from './MovieDetails.module.css'

interface IProps {
    movieDetails: IMovie
}
const MovieDetails:FC<IProps> = ({movieDetails}) => {
    const {id, title, original_title, original_language, release_date, vote_count, video, backdrop_path, poster_path, overview, adult, genre_ids, popularity,} = movieDetails;
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
 return (
  <div className={css.MoviesDetails}>
      <img src={imageUrl} alt={title}/>
      <div className={css.infoBlock}>
          <div className={css.info}>
              <h1 className={css.title}>{title}</h1>
              <div>Original title: {original_title}</div>
              <br/>
              <div>Original language: {original_language}</div>
              <br/>
              <div>Release date: {release_date}</div>
          </div>
          <div className={css.overview}>
              {overview}
          </div>
      </div>
  </div>
 );
};

export {MovieDetails};