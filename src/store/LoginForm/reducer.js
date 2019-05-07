import {INPUT_EMAIL, INPUT_PASSWORD} from "./constants";

const initState = {
    email: undefined,
    password: undefined,
};

export default function reduce(state = initState, action) {
    switch (action.type) {
        case INPUT_EMAIL:
            return {...state, email: action.email};
        case INPUT_PASSWORD:
            return {...state, password: action.password};
        default:
            return state;
    }
}

/**
 * Selector for getting email address
 * @param state
 * @returns {*}
 */
export function getEmail(state) {
    return state.LF_loginState.email
}

/**
 * Selector for getting password
 * @param state
 * @returns {*}
 */
export function getPassword(state) {
    return state.LF_loginState.password
}