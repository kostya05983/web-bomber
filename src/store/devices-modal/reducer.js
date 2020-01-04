import {SET_IS_OPEN} from "./constants";


const initState = {
    isOpen: undefined,
};

export default function reduce(state = initState, action) {
    switch (action.type) {
        case SET_IS_OPEN:
            return {...state, isOpen: action.payload};
        default:
            return state;
    }
}