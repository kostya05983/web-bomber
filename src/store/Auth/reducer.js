import {GET_CURRENT_USER, LOGIN, SIGNUP} from "./constants";

const initState = {
    currentUser: undefined,
};

export default function reducer(state = initState, action) {
    const {type, payload} = action;

    switch (type) {
        case LOGIN:
            console.log("Reduce login");
        case SIGNUP:
            console.log("Reduce signUp");
        case GET_CURRENT_USER:
            return {...state, currentUser: payload};
        default:
            return state
    }
}