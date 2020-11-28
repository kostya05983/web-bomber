import * as types from './constants'
import ScriptService from '../../services/rest/RestScriptService'
import {TOGGLE_MODAL} from "./constants";

export function toggleCreateModal() {
    return {
        "type": TOGGLE_MODAL,
        "payload": null
    }
}

/**
 * Request script from server
 * @param offset
 * @param limit
 * @returns {Function}
 */
export function getScripts(offset, limit) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch getAll (offset=%s, limit=%s)", offset, limit);

            const fetchedScripts = ScriptService.getAll(offset, limit);

            let response = await fetchedScripts;

            dispatch({type: types.GET_SCRIPTS, payload: response.items});
        } catch (error) {
            console.error("Error while dispatch getAll %s", error)
        }
    }
}

/**
 * Action for create Script on server
 * @param script - script to save
 * @returns {Function}
 */
export function createScript(script) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch create (script=%script)", script);

            const createdScript = ScriptService.create(script);

            let response = await createdScript;

            dispatch({type: types.ADD_SCRIPT, payload: response});
        } catch (error) {
            console.error("Error while create", error)
        }
    }
}

/**
 * Action for update script
 * @param script - script to update
 * @returns {Function}
 */
export function updateScript(script) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch update (script=%s)", script);

            const updatedScript = ScriptService.update(script);

            let response = await updatedScript;

            dispatch({type: types.UPDATE_SCRIPT, payload: response});
        } catch (error) {
            console.error("Error while update script", error)
        }
    }
}

/**
 * Action for delete script
 * @param id - id of script to remove
 * @returns {Function}
 */
export function deleteScript(id) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch delete (id=%s)", id);

            const removeScript = ScriptService.delete(id);

            let response = await removeScript;

            dispatch({type: types.DELETE_SCRIPT, payload: response})
        } catch (error) {
            console.error("Error while delete script", error)
        }
    }
}

