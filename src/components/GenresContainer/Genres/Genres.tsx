import {FC, useEffect, useState} from "react";

import {genresService} from "../../../services";
import {IGenre} from "../../../interfaces";
import {Genre} from "../Genre";
import css from './Genres.module.css'
interface IProps {

}
const Genres:FC<IProps> = () => {
    const [genres, setGenres] = useState<IGenre[]>([])
    useEffect(() => {
        genresService.getAll().then(({data}) => setGenres(data.genres))
    }, []);
 return (
  <div className={css.genres}>
      <h2>Genres</h2>
      {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
  </div>
 );
};

export {Genres};