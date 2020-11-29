import {FETCH_RESULTS} from "./constants";

const initState = {
    results: []
};


export default function reducer(state = initState, action) {
    switch (action.type) {
        case FETCH_RESULTS:
            return {...state, results: action.payload};
        default:
            return state
    }
}
