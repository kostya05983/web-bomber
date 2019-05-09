import {TOGGLE_MODAL} from "./constants";

const initState = {
    loading: true,
    isOpen: false
};


export default function reducer(state = initStatem, action) {
    const {type, payload} = action;

    switch (type) {
        case TOGGLE_MODAL:
            return {...state, isOpen: !state.isOpen};
        default:
            return state
    }
}