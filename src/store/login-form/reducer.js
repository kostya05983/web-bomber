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