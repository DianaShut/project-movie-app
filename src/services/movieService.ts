import {IMovie} from "../interfaces";
import {apiService} from "./apiService";
import {IRes} from "../types";
import {urls} from "../constans";

const movieService = {
    getAll:(page:string): IRes<IMovie[]> => apiService.get(urls.movies.base, {params:{page}}),
    getById:(id:number): IRes<IMovie> => apiService.get(urls.movies.byId(id))
}

export {movieService}