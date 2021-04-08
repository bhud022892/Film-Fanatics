import React from 'react'
import { MovieControls } from './MovieControls'
import '../styles/style.scss'

export const MovieCard = ({movie, type}) => {
    return (
        <div className="movie-card">
            { movie.poster_path ? (
                <img
                className="poster"
                src={ `https://image.tmdb.org/t/p/w200${ movie.poster_path } ` }
                alt={`${movie.title} Poster`}
                />
            ) : (
                <div className="filler-poster"><h2>No Poster Available</h2></div>
            )}
            <div className="poster-overlay">
                <div className="poster-info">
                    <h3 className="title">{ movie.title }</h3>
                    <h4 className="release-date">
                        {movie.release_date ? movie.release_date.substring(0, 4) : "N/A"}
                    </h4>
                    <MovieControls type={type} movie={movie} />
                </div>
            </div>
        </div>
    )
}
