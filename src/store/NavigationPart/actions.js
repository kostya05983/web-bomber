import { TOOGLE_CARD } from "./constants";

export function toggle(){
    return {
        "type": TOOGLE_CARD,
        "payload": null
    }
}