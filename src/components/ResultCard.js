import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import '../styles/style.scss'

export const ResultCard = ({ movie }) => {

    const {
        addToWatchlist,
        addToWatched,
        watchlist,
        watched
    } = useContext(GlobalContext)

    let storedMovie = watchlist.find((o) => o.id === movie.id)
    let storedWatchedMovie = watched.find((o) => o.id === movie.id)

    const watchlistDisabled = storedMovie 
    ? true 
    : storedWatchedMovie 
    ? true 
    : false

    const watchedDisabled = storedWatchedMovie ? true : false

    return (
        <div className="result-card">
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
                        <button 
                        className="btn"
                        disabled={ watchlistDisabled }
                        onClick={() => addToWatchlist(movie)}
                        >
                            {watchlistDisabled ? 'Added' : 'Watchlist'}
                        </button>
                        
                        <button 
                        className="btn"
                        disabled={ watchedDisabled }
                        onClick={() => addToWatched(movie)}
                        >
                            {watchedDisabled ? 'Watched' : 'Watched'}
                        </button>
                </div>
            </div>
        </div>
    )
}
