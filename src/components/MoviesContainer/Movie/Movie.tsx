import {FC} from "react";

import {IMovie} from "../../../interfaces";

interface IProps {
    movie: IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {title, poster_path} = movie;
 return (
  <div>
   <div>{title}</div>
      <img src={poster_path} alt={title}/>
  </div>
 );
};

export {Movie};