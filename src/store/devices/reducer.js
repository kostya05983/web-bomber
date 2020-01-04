import {ADD_DEVICE, GET_DEVICES, DELETE_DEVICE, UPDATE_DEVICE} from "./constants";


const initState = {
    devices: []
};

export default function reduce(state = initState, action) {
    switch (action.type) {
        case GET_DEVICES:
            return {...state, devices: action.payload};
        case ADD_DEVICE:
            console.log("Reduce add device", action.payload);
            return state;
        case UPDATE_DEVICE:
            console.log("Reduce update device", action.payload);
            return state;
        case DELETE_DEVICE:
            console.log("Reduce delete device", action.payload);
            return state;
        default:
            return state;
    }
}
