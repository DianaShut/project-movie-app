import {FC, useEffect, useState} from "react";

import {IMovie} from "../../interfaces";
import {movieService} from "../../services";
import {useParams} from "react-router-dom";
import {MovieDetails} from "../../components";
import css from './MoviesDetailsPage.css'
import {IInfo} from "../../interfaces/infoInterface";


const MovieDetailsPage:FC = () => {
    const [movieDetails, setMovieDetails] = useState<IInfo>(null)
    const {id} = useParams()

    useEffect(() => {
        movieService.getById(+id).then(({data}) => setMovieDetails(data))
    }, [id]);
 return (
  <div className={css.MoviesDetailsPage}>
      {movieDetails && <MovieDetails movieDetails={movieDetails}/>}
  </div>
 );
};

export {MovieDetailsPage};