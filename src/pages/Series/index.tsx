import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Header } from '../../components/Header';
import { RowMovie } from '../../components/RowMovie/RowMovie';

import '../Movies/styles.scss';

interface Category {
    id: number;
    name: string;
}

interface Serie {
    id: number;
    title: string;
    poster_path: string;
}

export function Series() {

    const [categories, setCategories] = useState<Category[]>([]);
    const [topsRated, setTopsRated] = useState<Serie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://api.themoviedb.org/3/genre/movie/list?api_key=97034e5b5f26cf232f706d6a03eed704',
            );
            console.log(result.data.genres);
            setCategories(result.data.genres);
        }
        
        fetchData();

        const fetchTopRated = async() => {
            const responseTopRated = await axios(
                'https://api.themoviedb.org/3/tv/top_rated?api_key=97034e5b5f26cf232f706d6a03eed704',
            );
            console.log(responseTopRated.data.results);
            setTopsRated(responseTopRated.data.results);
        }

        fetchTopRated();
    }, []);

    return(
        <>
            <Header/>
            <div className="movies-content">
                <div className="movies-container">
                    <div className="categories">
                        {categories.map(category => {
                            return <div key={category.id}>{ category.name }</div>
                        })}
                    </div>
                    <div className="movies">
                        {topsRated.map(topRated => {
                            return <RowMovie key={topRated.id} movie={topRated} />
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}