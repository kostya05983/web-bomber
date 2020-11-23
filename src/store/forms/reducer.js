import {ADD_FORM} from "./constants";
import {TOGGLE_MODAL} from "./constants";

const initState = {
    isOpen: false,
    forms: []
};

export default function reduce(state = initState, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {...state, isOpen: !state.isOpen};
        case ADD_FORM:
            console.log("Reduce add form", action.payload);
            return {...state, forms: action.payload};
        default:
            return state;
    }
}