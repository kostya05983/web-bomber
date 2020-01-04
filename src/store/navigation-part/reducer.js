import { TOGGLE_CARD } from "./constants";

const initState = {
    "loading": true,
    "open": false,
    "sample_text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
    "sample_img": "https://png.pngtree.com/svg/20161215/json_22047.png"
};

export default function NS_navigationState (state = initState, action){
    const {type, payload} = action;

    switch(type){
        case TOGGLE_CARD:
            return {...state, open: !state.open};
        default:
            return state
    }
}