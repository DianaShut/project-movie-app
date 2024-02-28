import {FC, useEffect, useState} from "react";

import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {Movie} from "../Movie";


interface IProps {

}
const Movies:FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [prevNext, setPrevNext] = useState({prev: null, nextPage: null})


    useEffect(() => {
        movieService.getAll(page).then(({data}) =>
            setMovies(data))

    }, [page]);

 return (
  <div>
      {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
      <div>
          <button>prev</button>
          <button>next</button>
      </div>
  </div>
 );
};

export {Movies};