import {INPUT_NAME, INPUT_EMAIL, INPUT_PASSWORD} from "./constants";

const initState = {
    name: undefined,
    email: undefined,
    password: undefined,
};

export default function reduce(state = initState, action) {
    switch (action.type) {
        case INPUT_NAME:
            return {...state, name: action.name};
        case INPUT_EMAIL:
            return {...state, email: action.email};
        case INPUT_PASSWORD:
            return {...state, password: action.password};
        default:
            return state;
    }
}

/**
 * Name of signUp user
 * @param state
 * @returns {string}
 */
export function getName(state) {
    return state.SU_signUpState.name
}

/**
 * Email of signUp user
 * @param state
 * @returns {*}
 */
export function getEmail(state) {
    return state.SU_signUpState.email
}

export function getPassword(state) {
    return state.SU_signUpState.password
}