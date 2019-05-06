import {REVERSE_AUTHENTICATED, GET_CURRENT_USER, LOGIN, SIGNUP} from "./constants";

const initState = {
    currentUser: undefined,
    isAuthenticated: false,
    accessToken: undefined,
};

export default function reducer(state = initState, action) {


    switch (action.type) {
        case LOGIN:
            console.log("Reduce login");
            return {...state, accessToken: action.accessToken};
        case SIGNUP:
            console.log("Reduce signUp");
        case REVERSE_AUTHENTICATED:
            console.log("Reduce authentication");
            return {...state, isAuthenticated: !state.isAuthenticated};
        case GET_CURRENT_USER:
            return {...state, currentUser: action.currentUser};
        default:
            return state
    }
}

/**
 * Selecter for get current state of auth
 * @param state
 * @returns {boolean}
 */
export function isAuthenticated(state) {
    return state.AU_authState.isAuthenticated
}

/**
 * Select current auth user
 * @param state
 * @returns {undefined|*}
 */
export function selectCurrentUser(state) {
    return state.AU_authState.currentUser
}