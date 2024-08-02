// store/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favMovies: [],
    },
    reducers: {
        addFavorite: (state, action) => {

            const existingIndex = state?.favMovies?.findIndex(item => item.id === action.payload.id);
            if (existingIndex === -1) {
                state.favMovies.push(action.payload);
            }
        },

        removeFavorite: (state, action) => {
            state.items = state.favMovies.filter(item => item.id !== action.payload.id);
        },
    },
});


export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
export const selectFavorites = (state) => state.favorites.favMovies;
