const API_KEY = '97034e5b5f26cf232f706d6a03eed704';
const API_BASE = 'https://api.themoviedb.org/3';

const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=97034e5b5f26cf232f706d6a03eed704');
const data = await response.json();