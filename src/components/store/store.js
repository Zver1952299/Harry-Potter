import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice";

import Reducer, {addToFavorite, removeFromFavorite} from '../store/favoriteSlice';

const listener = createListenerMiddleware();

listener.startListening({
    actionCreator: addToFavorite,
    effect: (action, listenerApi) => {
        console.log(action.payload.favorite);
    }
})

export default configureStore({
    reducer: {
        favorite: favoriteReducer
    }
});