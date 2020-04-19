export const GET_MOVIES = 'GET_MOVIES'

export function getMovies() {
    return async function (dispatch) {
        const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=d682d07c8c27860c7d057074e7a3a28a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
        const movies = await res.json();
        return dispatch({
            type: GET_MOVIES,
            data: movies.results
        })
    }
};



// a thunk is a function that return a function
// allows us to return a function from an action
// we can return a function instead of an object
// async hit an api