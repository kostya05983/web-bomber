import {ADD_SCRIPT, FETCHED_SCRIPTS, REMOVE_SCRIPT, UPDATE_SCRIPT} from "./constants";


const initState = {
    scripts: []
};

export default function reduce(state = initState, action) {
    switch (action.type) {
        case FETCHED_SCRIPTS:
            console.log("Reduce fetched Script");
            return {...state, scripts: action.payload};
        case ADD_SCRIPT:
            console.log("Reduce add Script", action.payload);
            return state;
        case UPDATE_SCRIPT:
            console.log("Reduce update Script", action.payload);
            return state;
        case REMOVE_SCRIPT:
            console.log("Remove script", action.payload);
            return state;
        default:
            return state;
    }
}