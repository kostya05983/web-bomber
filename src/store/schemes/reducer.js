import {ADD_SCHEMA, GET_SCHEMES, REMOVE_SCHEMA, TOGGLE_MODAL, UPDATE_SCHEMA} from "./constants";

const initState = {
    loading: true,
    isOpen: false,
    schemes: []
};


export default function reducer(state = initState, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {...state, isOpen: !state.isOpen};
        case GET_SCHEMES:
            return {...state, schemes: action.payload};
        case ADD_SCHEMA:
            console.log("Add schema", action.payload);
            return state;
        case UPDATE_SCHEMA:
            console.log("UPDATE schema", action.payload);
            return state;
        case REMOVE_SCHEMA:
            console.log("Remove schema", action.payload);
            return state;
        default:
            return state
    }
}
