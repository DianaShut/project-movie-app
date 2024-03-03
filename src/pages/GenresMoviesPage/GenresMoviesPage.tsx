import {FC, useEffect, useState} from "react";

import {Genres, Movie, Movies} from "../../components";
import css from './GenresMoviesPage.module.css'
import {IMovie} from "../../interfaces";
import {genresService} from "../../services";
import {useParams, useSearchParams} from "react-router-dom";


const GenresMoviesPage:FC = () => {
    const [genresMovies, setGenresMovies] = useState<IMovie[]>([])
    const {id} = useParams<string>()
    const [query, setQuery] = useSearchParams()
    const page = query.get('page')

    useEffect(() => {
        genresService.getByIdMovie(page, id).then(({data:{results}}) => setGenresMovies(results))
    }, [page, id]);



    return (
  <div className={css.GenresMoviesPage}>
      <div><Genres/></div>
      <div>
          <Movies movies={genresMovies} page={page} setQuery={setQuery}/>
      </div>
  </div>
 );
};

export {GenresMoviesPage};