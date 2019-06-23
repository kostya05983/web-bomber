import {ADD_SCHEME, FETCHED_SCHEMES, REMOVE_SCHEME, TOGGLE_MODAL, UPDATE_SCHEME} from "./constants";

const initState = {
    loading: true,
    isOpen: false,
    schemes: []
};


export default function reducer(state = initState, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {...state, isOpen: !state.isOpen};
        case FETCHED_SCHEMES:
            return {...state, schemes: action.payload};
        case ADD_SCHEME:
            console.log("Add scheme", action.payload);
            return state;
        case UPDATE_SCHEME:
            console.log("UPDATE scheme", action.payload);
            return state;
        case REMOVE_SCHEME:
            console.log("Remove scheme", action.payload);
            return state;
        default:
            return state
    }
}