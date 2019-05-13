import * as types from './constants'
import ScriptService from '../../services/ScriptsBomberService'

/**
 * Request script from server
 * @param offset
 * @param limit
 * @returns {Function}
 */
export function fetchedScripts(offset, limit) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch getScripts");

            const fetchedScripts = ScriptService.getScripts(offset, limit);

            let response = await fetchedScripts;

            dispatch({type: types.FETCHED_SCRIPTS, payload: response});
        } catch (error) {
            console.error(error)
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
            console.log("Dispatch createScript");

            const createdScript = ScriptService.createScript(script);

            let response = await createdScript;

            dispatch({type: types.ADD_SCRIPT, payload: response});
        } catch (error) {
            console.error(error)
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
            console.log("Dispatch updateScript");

            const updatedScript = ScriptService.updateScript(script);

            let response = await updatedScript;

            dispatch({type: types.UPDATE_SCRIPT, payload: response});
        } catch (error) {
            console.error(error)
        }
    }
}

/**
 * Action for remove script
 * @param id - id of script to remove
 * @returns {Function}
 */
export function removeScript(id) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch removeScript");

            const removeScript = ScriptService.removeScript(id);

            let response = await removeScript;

            dispatch({type: types.REMOVE_SCRIPT, payload: response})
        } catch (error) {
            console.error(error)
        }
    }
}

