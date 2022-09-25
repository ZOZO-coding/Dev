import { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=4558bea3';

// dummy data
const movie1 = {
    "Title": "Batman",
    "Year": "1989",
    "imdbID": "tt0096895",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        // the setter is going to append all results coming from the api, to the movie state
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('batman');
    }, [])

    return (
        <div className='app'>
            <h1>ZoZo MovieLand</h1>

            <div className="search">
                <input 
                    type="text"
                    placeholder='Search for movies' 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon} 
                    alt="search"
                    onClick={() => searchMovies(searchTerm)} 
                />
            </div>

            {
                movies.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                )
                : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;