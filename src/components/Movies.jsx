import React from 'react';
import "../styles/movies.css";
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from '../store/movies/moviesSlice';
import Loader from './Loader';
import { addFavorite } from '../store/favourites/favouriteSlice';

const Movies = ({ moviesData }) => {
    const dispatch = useDispatch()
    const loading = useSelector(selectLoading);

    const onAddToFavorites = (item) => {
        dispatch(addFavorite(item))
    }
    return (


        <div className='moviesList'>
            {moviesData?.map((movie) => (
                <div className='movieItem' key={movie.id}>
                    <div className='imageContainer'>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className='overlay'>
                            <h5 className='movieTitle'>{movie.title}</h5>
                            <p className='movieReleaseDate'>{new Date(movie.release_date).toLocaleDateString()}</p>
                            <button
                                className='addButton'
                                onClick={() => onAddToFavorites(movie)}
                            >
                                Add to Favorites
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {loading && <Loader />}
        </div>

    );
};

export default Movies;
