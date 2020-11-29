import * as types from './constants'
import FormService from '../../services/FormService'
import {TOGGLE_MODAL} from "./constants";

export function toggleCreateModal() {
    return {
        "type": TOGGLE_MODAL,
        "payload": null
    }
}

export function addForm(form) {
    return async (dispatch, state) => {
        try {
            console.log("Disptach create (form=$s", form);

            const createForm = FormService.create(form);

            let response = await createForm;

            dispatch({type: types.ADD_FORM, payload: response});
        } catch (error) {
            console.error("Error while dispatch create $s", error)
        }
    }
}

export function runForm(formId) {
    return async (dispatch, state) => {
        try {
            console.log("Disptach run form", formId);

            const runForm = FormService.run(formId);

            let response = await runForm;

            dispatch({type: types.RUN_FORM, payload: response})
        } catch (error) {
            console.error("Error while disptach run form", error)
        }
    }
}

export function getForms(offset, limit) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch get forms with (offset=%s,limit=%s)", offset, limit);

            const getForms = FormService.getAll(offset, limit);

            let response = await getForms;

            dispatch({type: types.GET_FORMS, payload: response.items});
        } catch (error) {
            console.error("Error while dispatch get %s", error)
        }
    }
}

