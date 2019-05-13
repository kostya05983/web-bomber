import {ADD_DEVICE, FETCHED_DEVICE, REMOVE_DEVICE, UPDATE_DEVICE} from "./constants";


const initState = {
    devices: []
};

export default function reduce(state = initState, action) {
    switch (action.type) {
        case FETCHED_DEVICE:
            return {...state, devices: action.response};
        case ADD_DEVICE:
            console.log("Reduce add device");
            return state;
        case UPDATE_DEVICE:
            console.log("Reduce update device");
            return state;
        case REMOVE_DEVICE:
            console.log("REMOVE device");
            return state;
        default:
            return state;
    }
}