import {ADD_SCRIPT, GET_SCRIPTS, DELETE_SCRIPT, UPDATE_SCRIPT} from "./constants";
import {TOGGLE_MODAL} from "./constants";


const initState = {
    isOpen: false,
    scripts: []
};

export default function reduce(state = initState, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {...state, isOpen: !state.isOpen};
        case GET_SCRIPTS:
            console.log("Reduce get Scripts", action.payload);
            return {...state, scripts: action.payload};
        case ADD_SCRIPT:
            console.log("Reduce add Script", action.payload);
            return state;
        case UPDATE_SCRIPT:
            console.log("Reduce update Script", action.payload);
            return state;
        case DELETE_SCRIPT:
            console.log("Delete script", action.payload);
            return state;
        default:
            return state;
    }
}
