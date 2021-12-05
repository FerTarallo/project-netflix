import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Movie } from '../../types';


import { Header } from '../../components/Header';
import { MovieList } from '../../components/MovieList';

import './styles.scss';

interface Category {
    id: number;
    name: string;
}

export default function Movies() {

    

    const [categories, setCategories] = useState<Category[]>([]);
    const [topsRated, setTopsRated] = useState<Movie[]>([]);
    const [search, setSearch] = useState("");
    const baseUrl = "https://image.tmdb.org/t/p/w500/";

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://api.themoviedb.org/3/genre/movie/list?api_key=97034e5b5f26cf232f706d6a03eed704',
            );
            // console.log(result.data.genres);
            setCategories(result.data.genres);
        }

        fetchData();

        const fetchTopRated = async () => {
            const responseTopRated = await axios(
                'https://api.themoviedb.org/3/movie/top_rated?api_key=97034e5b5f26cf232f706d6a03eed704',
            );
            // console.log(responseTopRated.data.results);
            setTopsRated(responseTopRated.data.results);
        }

        fetchTopRated();
    }, []);

    // useEffect(() => {
    //     const fetchSearch = async () => {
    //         const response = await axios(
    //             `https://api.themoviedb.org/3/search/movie?api_key=97034e5b5f26cf232f706d6a03eed704&query=${search}`,
    //         );
    //         console.log(response.data.results);
    //     }
    //     fetchSearch();
    //     console.log(search);
    // }, [search]);

    return (
        <>
            <Header />
            <div className="movies-container">
                {topsRated.map(topRated => {
                    return <MovieList key={topRated.id} movie={topRated} />
                })}
            </div>
        </>
    );
};