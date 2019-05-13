import {API_BASE_URL} from "./constants";
import request from "./Request";

/**
 * This service is reponsed for communication with scripts
 */
class ScriptsBomberService {

    /**
     * Get scripts with offset and limit
     * @param offset - how many scripts we will skip
     * @param limit - how many scripts we can maximum get
     * @returns {Promise<void>} - return promise of request
     */
    async getScripts(offset, limit) {
        return await request({
            url: API_BASE_URL + `/jsonScriptAll?offset=${offset}&limit=${limit}`
            method: 'GET'
        })
    }

    /**
     * Create script on server
     * @param script - transfer script from gui
     * @returns {Promise<void>}
     */
    async createScript(script) {
        return await request({
            url: API_BASE_URL + `/jsonScript`,
            method: 'POST',
            body: script
        })
    }

    /**
     * Update script with put method on server, update will be determined by key in script
     * @param script - transfer script from gui
     * @returns {Promise<void>}
     */
    async updateScript(script) {
        return await request({
            url: API_BASE_URL + `/jsonScript`,
            method: 'PUT',
            body: script
        })
    }

    /**
     * Remove script from server by id
     * @param id - id of script to remove
     * @returns {Promise<void>}
     */
    async removeScript(id) {
        return await request({
            url: API_BASE_URL + `/jsonScript/?id=${id}`,
            method: 'DELETE'
        })
    }
}

export default new ScriptsBomberService()