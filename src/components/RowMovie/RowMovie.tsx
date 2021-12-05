import './styles.scss';

interface RowMovieProps {
    movie: {
        id: number;
        title: string;
        poster_path: string;
    }
}

export function RowMovie(props: RowMovieProps) {

    const baseUrl = "https://image.tmdb.org/t/p/w500/";

    return (
        <>
            <div className="container-poster">
                <img
                    key={props.movie.id}
                    className="poster"
                    src={`${baseUrl}${props.movie.poster_path}`}
                    alt={props.movie.title}
                />
                <button
                    type="button"
                    data-testid="add-product-button"
                >
                Add MyList
                </button>
            </div>
        </>
    );
}