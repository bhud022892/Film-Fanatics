import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { MovieCard } from './MovieCard'
import '../styles/style.scss'


export const Watchlist = () => {

    const { watchlist } = useContext(GlobalContext)

    return (
        <div className="watchlist-page-container">
                <div className="header">
                    <h1 className="heading">
                        You Have <span className="film-count">{watchlist.length}</span> {watchlist.length === 1 ? 'Film' : 'Films'} To Watch                        
                    </h1>
                    
                        
                    
                </div>

                {watchlist.length > 0 ? (
                    <div className="movie-grid">
                    {watchlist.map((movie) => (
                        <MovieCard movie={movie} type='watchlist' />
                    ))}
                    </div>
                ) : (
                    <h2 className="no-movies">Add a film to your watch list!</h2>
                )}
        </div>
    )
}
