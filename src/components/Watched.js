import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { MovieCard } from './MovieCard'
import '../styles/style.scss'

export const Watched = () => {

    const {watched} = useContext(GlobalContext)

    return (
        <div className="watched-page-container">
            <div className="container">
                <div className="header">
                    <h1 className="heading">
                        You Have Watched <span className="film-count">{watched.length}</span> {watched.length === 1 ? 'Film' : 'Films'}                        
                    </h1>
                </div>

                {watched.length > 0 ? (
                    <div className="movie-grid">
                    {watched.map((movie) => (
                        <MovieCard movie={movie} type='watched' />
                    ))}
                    </div>
                ) : (
                    <h2 className="no-movies">Add movies you have watched here!</h2>
                )}
                
            </div>
        </div>
    )
}
