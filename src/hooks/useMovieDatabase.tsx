import { useContext } from 'react';
import { MovieDBContext } from "../contexts/MovieDBContext";

export function useMovieDB() {
    const movieDB = useContext(MovieDBContext);

    return movieDB;
}