import { createSlice } from "@reduxjs/toolkit";

const FavoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: {}
    },
    reducers: {
        addToFavorite(state, action) {
            state.favorites = {
                ...state.favorites,
                ...action.payload
            }
        },
        removeFromFavorite(state, action) {
            delete state.favorites[action.payload]
        }
    }

});

export const {addToFavorite, removeFromFavorite} = FavoritesSlice.actions;

export default FavoritesSlice.reducer;