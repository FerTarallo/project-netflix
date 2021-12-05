import { toast } from 'react-toastify';

import { useMovieDB } from '../../hooks/useMovieDatabase';
import api from '../../services/api';

import './styles.scss';

interface MovieProps {
    movie: {
        id: number;
        title: string;
        poster_path: string;
    }
}

export function MovieList(props: MovieProps) {
    const baseUrl = "https://image.tmdb.org/t/p/w500/";
    const { myList, onNewMovie } = useMovieDB();

    function handleAddMyList(id: number) {
        const movieExists = myList.find(movie => movie.id === id);

        if (movieExists) {
            toast.error('O título já consta em sua lista');
            console.log("Já consta na lista");
        } else {
            console.log("Vai adicionar na lista");
            console.log("Id ", id);
            api
                .get(`movie/${id}?api_key=97034e5b5f26cf232f706d6a03eed704`)
                .then((response) => {
                    console.log(response.data);
                    onNewMovie({
                        id: response.data.id, 
                        title: response.data.title,
                        poster_path: response.data.poster_path
                    });
                    console.log(myList);
                })
                .catch((err) => {
                    toast.error('Erro ao executar a função');
                });
        }
    }


    return (
        <>
                <img
                    className="container-poster"
                    src={`${baseUrl}${props.movie.poster_path}`}
                    alt={props.movie.title}
                />
                {/* <button
                    type="button"
                    data-testid="add-product-button"
                    value={props.movie.id}
                    onClick={() => handleAddMyList(props.movie.id)}
                >
                    Add MyList
                </button> */}
        </>
    );
};