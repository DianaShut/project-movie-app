import {FC, useState} from "react";
import {SetURLSearchParams} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {Movie} from "../Movie";
import css from './Movies.module.css'

interface IProps {
    movies: IMovie[],
    page: string,
    setQuery: SetURLSearchParams
}
const Movies:FC<IProps> = ({movies, setQuery, page}) => {

    const prev = () => {
        setQuery(prev=>{
            const prevPage = prev.set('page', `${+prev.get('page')-1}`)
            return prev
        })
    };
    const next = () => {
        setQuery(prev=>{
            const nextPage = prev.set('page', `${+prev.get('page')+1}`)
            return prev
        })
    };
    const prevPage = +page > 1

 return (
  <div>
      <div className={css.moviesPage}>
          <h2>Films</h2>
          <div className={css.movies}>
              {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
          </div>
      </div>
      <div className={css.buttons}>
          <button onClick={prev} disabled={!prevPage}>prev</button>
          <div>page {page}   </div>
          <button onClick={next}>next</button>
      </div>
  </div>
 );
};

export {Movies};