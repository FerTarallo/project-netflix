import { createContext, useState } from 'react';

import { Movie } from '../types';
import api from '../services/api';

type MovieDBContextType = {
    myList: Movie[],
    onNewMovie: (movie: Movie) => void
}

export const MovieDBContext = createContext({} as MovieDBContextType);

export function MovieDBProvider({ children }: {children:any}) {
    const [myList, setMyList] = useState<Movie[]>([]);

   function onNewMovie(movie: Movie) {

        setMyList(state => [...state, movie]);
   }

    return (
        //Fornece as informações contidas no contexto
        <MovieDBContext.Provider
            value={{
                myList,
                onNewMovie
            }}
        >
            {children}
        </MovieDBContext.Provider>
    );
}