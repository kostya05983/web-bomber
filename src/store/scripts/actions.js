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
            console.log("Dispatch getScripts (offset=%s, limit=%s)", offset, limit);

            const fetchedScripts = ScriptService.getScripts(offset, limit);

            let response = await fetchedScripts;

            dispatch({type: types.GET_SCRIPTS, payload: response});
        } catch (error) {
            console.error("Error while dispatch getScripts %s", error)
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
            console.log("Dispatch createScript (script=%script)", script);

            const createdScript = ScriptService.createScript(script);

            let response = await createdScript;

            dispatch({type: types.ADD_SCRIPT, payload: response});
        } catch (error) {
            console.error("Error while createScript", error)
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
            console.log("Dispatch updateScript (script=%s)", script);

            const updatedScript = ScriptService.updateScript(script);

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
            console.log("Dispatch deleteScript (id=%s)", id);

            const removeScript = ScriptService.deleteScript(id);

            let response = await removeScript;

            dispatch({type: types.DELETE_SCRIPT, payload: response})
        } catch (error) {
            console.error("Error while delete script", error)
        }
    }
}

