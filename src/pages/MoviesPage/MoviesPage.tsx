import {FC, useEffect, useState} from "react";

import {Genres, Movies} from "../../components";
import {IMovie} from "../../interfaces";
import {useSearchParams} from "react-router-dom";
import {movieService} from "../../services";
import css from './MoviesPage.module.css'
import SearchResults from "../../components/SearchContainer/SearchResults/SearchResults";

const MoviesPage:FC = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
     const [query, setQuery] = useSearchParams({page: '1'})
    const page = query.get('page')

    useEffect(() => {
        if(page){
        movieService.getAll(page).then(({data:{results}}) => setMovies(results))}
    }, [page]);

 return (
  <div className={css.MoviesPage}>
      <div className={css.genresList}>
          <Genres/>
      </div>
      <div>
          <div className={css.search}>
              <SearchResults/>
          </div>
          <Movies page={page} movies={movies} setQuery={setQuery}/>
      </div>
  </div>
 );
};

export {MoviesPage};