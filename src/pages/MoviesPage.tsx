import {FC} from "react";

import {Movies} from "../components";

interface IProps {

}
const MoviesPage:FC<IProps> = () => {
 return (
  <div>
   <Movies/>
  </div>
 );
};

export {MoviesPage};