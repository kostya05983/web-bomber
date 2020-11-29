import {ADD_FORM, GET_FORMS, RUN_FORM} from "./constants";
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
        case GET_FORMS:
            console.log("Reduce get forms", action.payload);
            return {...state, forms: action.payload};
        case RUN_FORM:
            console.log("Reduce run form", action.payload);
            return state;
        default:
            return state;
    }
}
