// This personal project uses Open Movie Poster DB from omdbapi.com
//API key: 83ccc6f7
import React, { useState, useEffect } from 'react';
import './app.css';
import SearchIcon from './search.svg';
import MovieCard from './movie-card';

//Sets the URL for API
const API_URL = 'http://www.omdbapi.com?apikey=83ccc6f7';
const movie = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
};

const App = () => {
    const [ movies, setMovies ] = useState([]);
    const [ searchTerm, setSearchTerm] = useState('');
    // Create function for searching movies using movie API
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        // Whatever is pulled up from the API call will be handled in the setter function 'setMovies'
        setMovies(data.Search);
    }
    // Load data from movie API during the initiation e.g. Spiderman movie
    useEffect(() => {
        searchMovies('spiderman');
    }, [])
    return (
       <div className='app'>
           <h1>Motion Pix</h1>
           <div className='search'>
               {/* Setting the input dynamic with value */}
                <input placeholder='Find your movie here...' value={ searchTerm}
                // Make the input field typing-enable
                onChange={(e) => setSearchTerm(e.target.value)}>
                </input>
                <img src={ SearchIcon }
                alt='search'
                // Make the search icon dynamically searching whatever value is typed in the input field after clicking the button
                onClick={() => searchMovies(searchTerm)}></img>
           </div>
            {/* Dyanmic section to render MovieCard */}
           {
               movies?.length > 0 ? (
                <div className='container'>
                    {/* To map over the array of movie result. Each movie will be rendered to MovieCard with props being passsed over */}
                    {movies.map((movie) => (<MovieCard movie={movie}/>))}
                </div>
               ) :
               (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
               )
           }
           
       </div> 
    )
}
export default App;
