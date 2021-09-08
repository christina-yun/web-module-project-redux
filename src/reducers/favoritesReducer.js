import data from './../data'
import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions';
const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_FAVORITE): {
            return {
                ...state,
                favorites:[...state.favorites,
                {
                    id:Date.now(),
                    title:action.payload
                }]
            };
        }
        case(TOGGLE_FAVORITES): {
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        }
        case(REMOVE_FAVORITE): {
            return {
                ...state,
                favorites: state.favorites.filter(item => (action.payload !== item.id))
            }
        }
        default:
            return state;
    }
};

export default favoritesReducer;