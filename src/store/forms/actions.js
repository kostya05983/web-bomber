import * as types from './constrants'
import FormService from '../../services/FormService'
import {TOGGLE_MODAL} from "./constants";

export function toggleCreateModal() {
    return {
        "type": TOGGLE_MODAL,
        "payload": null
    }
}

