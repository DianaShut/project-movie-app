import {FC, useEffect, useState} from "react";
import {IMovie} from "../../../interfaces";
import {Movie} from "../Movie";


interface IProps {

}
const FavoriteMovies:FC<IProps> = () => {
    const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([])

    useEffect(() => {
        const storedFavoriteMovies = localStorage.getItem('favoriteMovies');
        if (storedFavoriteMovies) {
            setFavoriteMovies(JSON.parse(storedFavoriteMovies));
        }
    }, []);

 return (
  <div>
      {favoriteMovies.map(favoriteMovie => <Movie movie={favoriteMovie} key={favoriteMovie.id}/>)}
  </div>
 );
};

export {FavoriteMovies};