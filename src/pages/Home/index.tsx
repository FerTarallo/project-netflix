import { RowMovieList } from '../../components/RowMovie/RowMovieList';
import { Header } from '../../components/Header';

import panelImg from '../../assets/panel.jpg';

import '../../styles/global.scss';
import { RowMovie } from '../../components/RowMovie/RowMovie';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export function Home() {
  
  return(
    <>
        <Header />
        <div className="container-panel">
          <div className="content-panel">
            <h1>STRANGER THINGS</h1>
            <p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying, supernatural forces and a stranfe little girl.</p>
            <div className="content-panel-button">
              <button>Play</button>
              <button>My List</button>
            </div>
          </div>
          <img src={ panelImg } alt="Painel" />
        </div>
        {/* { movie.map(movie => {
            return <RowMovie key={movie.id} movie={movie} />
        })} */}
    </>
  );
}