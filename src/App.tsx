
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Movies from './pages/Movies';
import { Series } from './pages/Series';
import MyList from './pages/MyList';
import { MovieDBProvider } from './contexts/MovieDBContext';

export function App() {
  return (
    <>
      <MovieDBProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/mylist" element={<MyList />} />
          </Routes>
        </BrowserRouter>
      </MovieDBProvider>
    </>
  );
}
