import {TOGGLE_MODAL} from "./constants";
import * as types from './constants'
import SchemesService from '../../services/SchemeBomberService'

export function toggleCreateModal() {
    return {
        "type": TOGGLE_MODAL,
        "payload": null
    }
}

/**
 * Requests schemes from server
 * @returns {Function}
 */
export function fetchedSchemes(offset, limit) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch fetched shemes");

            const fetchedSchemes = SchemesService.getSchemes(offset, limit);

            let response = await fetchedSchemes;

            dispatch({type: types.FETCHED_SCHEMES, payload: response});
        } catch (error) {
            console.error(error)
        }
    }
}

/**
 * Action for create Scheme on server
 * @param scheme
 * @returns {Function}
 */
export function createScheme(scheme) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch createScheme");

            const createScheme = SchemesService.createScheme(scheme);

            let response = await createScheme;

            dispatch({type: types.ADD_SCHEME, payload: response})
        } catch (error) {
            console.error(error)
        }
    }
}

/**
 * Action for update scheme
 * @param scheme
 * @returns {Function}
 */
export function updateScheme(scheme) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch updateScheme");

            const updatedScheme = SchemesService.updateScheme(scheme);

            let response = await updatedScheme;

            dispatch({type: types.UPDATE_SCHEME, payload: response});
        } catch (error) {
            console.error(error)
        }
    }
}

/**
 * Action for remove scheme
 * @param id - id of scheme to remove
 * @returns {Function}
 */
export function removeScheme(id) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch removeScheme");

            const removedScheme = SchemesService.removeScheme(id);

            let response = await removedScheme;

            dispatch({type: types.REMOVE_SCHEME, payload: response});
        } catch (error) {
            console.error(error)
        }
    }
}