import { GET_MOVIES } from './actions'

// Only for this reducer
const initialState = {
    movies: [],
    moviesLoaded: false,
};

export default function (state = initialState, action) {
    const { type, data } = action
    switch (type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: data,
                moviesLoaded: true,
            }
        default:
            return state
    }
}