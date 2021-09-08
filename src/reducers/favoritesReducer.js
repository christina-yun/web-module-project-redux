const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case('ADD_FAVORITE'): {
            return {
                ...state,
                favorites:[...state.favorites,
                {
                    id:Date.now(),
                    title:action.payload
                }]
            };
        }
            default:
                return state;
    }
};

export default favoritesReducer;