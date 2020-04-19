export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE'

export function toggleMessage() {
    return {
        type: TOGGLE_MESSAGE,
    };
};



// a thunk is a function that return a function
// allows us to return a function from an action
// we can return a function instead of an object
// async hit an api