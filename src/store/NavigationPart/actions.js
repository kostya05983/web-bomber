import { TOGGLE_CARD } from "./constants";

export function toggle(){
    return {
        "type": TOGGLE_CARD,
        "payload": null
    }
}