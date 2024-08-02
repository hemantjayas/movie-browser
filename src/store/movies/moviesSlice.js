// src/features/moviesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { homeMovieApi } from '../../utils/apis';

const API_KEY = 'c69ba7ccef2dce029abdb736f29f9ecd';
const BASE_URL = 'https://api.themoviedb.org/3';


// Define an async thunk for fetching popular movies
export const fetchPopularMovies = createAsyncThunk(
    'movies/fetchPopularMovies',
    async (page, { dispatch, getState }) => {

        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
        return response.data;
    }
);

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        page: 1,
        totalPages: 1,
        loading: false,
        error: null,

    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPopularMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = [...state.movies, ...action?.payload?.results];
                state.page = action?.payload?.page;
                state.totalPages = action?.payload?.total_pages;
            })
            .addCase(fetchPopularMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});


export const selectAllMovies = (state) => state?.movies?.movies;
export const selectLoading = (state) => state?.movies?.loading;
export const currentPage = (state) => state?.movies?.page;
export const selectTotalPages = (state) => state?.movies?.totalPages;

export default moviesSlice.reducer;
