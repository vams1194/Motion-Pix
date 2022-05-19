import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <>
            <div className='movie'>
                <div>
                    <p>
                        {movie.Year}
                    </p>
                </div>
                <div>
                    {/* img src checks if poster key is not null else returning error 400 image */}
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'} alt={movie.Title}></img>
                </div>
                <div>
                    <span>
                        {movie.Type}
                    </span>
                    <h3>
                        {movie.Title}
                    </h3>
                </div>
            </div>
        </>
    )
}
export default MovieCard;