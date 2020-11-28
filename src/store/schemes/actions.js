import {TOGGLE_MODAL} from "./constants";
import * as types from './constants'
import SchemesService from '../../services/rest/RestSchemaService'

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
export function getSchemes(offset, limit) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch get schemes with (offset=%s,limit=%s)", offset, limit);

            const getSchemes = SchemesService.getAll(offset, limit);


            let response = await getSchemes;

            dispatch({type: types.GET_SCHEMES, payload: response.items});
        } catch (error) {
            console.error("Error while dispatch get schemes", error)
        }
    }
}

/**
 * Action for create Scheme on server
 * @param schema
 * @returns {Function}
 */
export function createSchema(schema) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch create (schema=%s)", schema);

            const createScheme = SchemesService.create(schema);

            let response = await createScheme;

            dispatch({type: types.ADD_SCHEMA, payload: response})
        } catch (error) {
            console.error("Error while dispatch create %s", error)
        }
    }
}

/**
 * Action for update scheme
 * @param schema
 * @returns {Function}
 */
export function updateSchema(schema) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch update (schema=%s)", schema);

            const updatedSchema = SchemesService.update(schema);

            let response = await updatedSchema;

            dispatch({type: types.UPDATE_SCHEMA, payload: response});
        } catch (error) {
            console.error("Error while dispatch update schema %s", error)
        }
    }
}

/**
 * Action for remove scheme
 * @param id - id of scheme to remove
 * @returns {Function}
 */
export function deleteSchema(id) {
    return async (dispatch, getState) => {
        try {
            console.log("Dispatch deleteSchema (id=%s)", id);

            const removedScheme = SchemesService.delete(id);

            let response = await removedScheme;

            dispatch({type: types.REMOVE_SCHEMA, payload: response});
        } catch (error) {
            console.error("Error while dispatch delete schema %s", error)
        }
    }
}
