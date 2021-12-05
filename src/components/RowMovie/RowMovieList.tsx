import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { RowMovie } from "./RowMovie";

import './styles.scss';

  interface Movie {
    id: number;
    title: string;
    poster_path: string;
  }

  export function RowMovieList() {

    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
    const [trendingSeries, setTrendingSeries] = useState<Movie[]>([]);

    useEffect(() => {
        const trendMovies = async () => {
          const resTrendMovies = await axios(
            'https://api.themoviedb.org/3/movie/popular?api_key=97034e5b5f26cf232f706d6a03eed704',
          );
          
          setTrendingMovies(resTrendMovies.data.results);
          console.log(resTrendMovies.data.results);
        };
    
        trendMovies();

        const trendSeries = async () => {
          const resTrendSeries = await axios(
            'https://api.themoviedb.org/3/tv/popular?api_key=97034e5b5f26cf232f706d6a03eed704',
          );

          setTrendingSeries(resTrendSeries.data.results);
          console.log(resTrendSeries.data.results);
        };

        trendSeries();
    }, []);

    return (
      <>
        <strong>Trending Movies</strong>
        <div className="row-posters">
          {trendingMovies.map(movie => {
            return <RowMovie key={movie.id} movie={movie} />
          })}
        </div>
        <strong>Trending Series</strong>
        <div className="row-posters">
          {trendingSeries.map(serie => {
            return <RowMovie key={serie.id} movie={serie} />
          })}
        </div>
      </>
    );
}