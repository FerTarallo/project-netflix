import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Movie } from '../../types';

import { Header } from '../../components/Header';
import { MovieList } from '../../components/MovieList';
import { useMovieDB } from '../../hooks/useMovieDatabase';

import './styles.scss';

export default function MyList() {
    const { myList } = useMovieDB();

    return (
        <>
            <Header />
            <section className="movies-container">
                {myList.map((movie) => {
                    console.log(myList);
                    return <MovieList key={movie.id} movie={movie} />
                })}
            </section>
        </>
    );
};