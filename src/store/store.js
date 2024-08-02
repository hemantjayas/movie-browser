// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from "./movies/moviesSlice"
import favMoviesReducer from "./favourites/favouriteSlice"
const store = configureStore({
    reducer: {
        movies: moviesReducer,
        favorites: favMoviesReducer
    },
});

export default store;
