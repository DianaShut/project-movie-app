import {IMovie} from "../interfaces";
import {apiService} from "./apiService";
import {IRes} from "../types";
import {urls} from "../constans";
import {IInfo} from "../interfaces/infoInterface";

const movieService = {
    getAll:(page:string): IRes<IInfo[]> => apiService.get(urls.movies.base, {params:{page}}),
    getById:(id:number): IRes<IMovie> => apiService.get(urls.movies.byId(id))
}

export {movieService}