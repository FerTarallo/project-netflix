import axios from 'axios';

export function Home() {

  axios
    .get(`https://api.themoviedb.org/3/movie/55?api_key=97034e5b5f26cf232f706d6a03eed704`)
    .then(response => {
      console.log(response.data);
    })

  return (
    <h1>NETFLIX</h1>
  );
}