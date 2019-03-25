import {Film, Rating, Trailer} from "../model/model";

import films from './films.json';



export function listFilms(){
    return films.map((element:any)=>{
            let genres:string[] = [];
            element.genre.map((g:string)=>genres.push(g));

            let directors:string[] = [];
            element.directors.map((d:string)=>directors.push(d));

            let actors:string[] = [];
            element.actors.map((a:string)=>actors.push(a));

            let trailers:Trailer[] = [];
            element.trailers.map((t:Trailer)=>trailers.push(t));

            let film = new Film(element.title,
                element.releasedate,
                element.studio,
                element.poster,
                element.location,
                element.rating,
                genres,
                directors,
                actors,
                trailers)
        }
    )
}

listFilms();

