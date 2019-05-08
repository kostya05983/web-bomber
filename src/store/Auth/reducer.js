import {REVERSE_AUTHENTICATED, GET_CURRENT_USER, LOGIN, SIGNUP} from "./constants";
import {ACCESS_TOKEN} from "../../services/constants";

const initState = {
    currentUser: undefined,
    isAuthenticated: false,
    accessToken: undefined,
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            console.log("Reduce login");
            localStorage.setItem(ACCESS_TOKEN, action.accessToken);
            console.log("After merge", {...state, accessToken: action.accessToken, isAuthenticated: true});
            return {...state, accessToken: action.accessToken, isAuthenticated: true};
        case SIGNUP:
            console.log("Reduce signUp");
            return {...state, payload: action.payload};
        case REVERSE_AUTHENTICATED:
            console.log("Reduce authentication");
            return {...state, isAuthenticated: !state.isAuthenticated};
        case GET_CURRENT_USER:
            return {...state, currentUser: action.currentUser};
        default:
            let token = window.localStorage.getItem(ACCESS_TOKEN);
            if (token != null) {
                return {...state, isAuthenticated: true}
            }
            return {...state, isAuthenticated: false}
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