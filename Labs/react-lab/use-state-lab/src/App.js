import { useEffect, useState } from 'react';

import MovieCard from './components/MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=4558bea3';

// dummy data
// const movie1 = {
//   "Title": "Batman",
//   "Year": "1989",
//   "imdbID": "tt0096895",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg"
// }

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // data returns a object with a property named "Search" which is going to be an array of movie object
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('batman')
  }, [])

  return (
    <div className="App">
      <h2>ZoeyFlix</h2>

      <div className='search'>
        <input 
          type="text"
          placeholder='Search for a movie'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)} 
        />
        <button onClick={() => searchMovies(searchTerm)}>Search</button>
      </div>

      {
        movies.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        )
        : (
          <div className='empty'>
            <h2>No Movies Found, Try Again...</h2>
          </div>
        )
      }

    </div>
  );
}

export default App;
