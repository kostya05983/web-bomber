import {API_BASE_URL} from "./constants";


class SchemeService {

    /**
     * GET schemes with offset and limit
     * @param offset - how many shemes we will skip
     * @param limit - how many scripts we can get
     * @returns {Promise<any>}
     */
    async getSchemes(offset, limit) {
        return await request({
            url: API_BASE_URL + `/jsonSchemaAll?offset=${offset}&limit=${limit}`,
            method: 'GET'
        })
    }

    /**
     * Create schema on server
     * @param scheme - transfer schema from gui
     * @returns {Promise<any>}
     */
    async createScheme(scheme) {
        return await request({
            url: API_BASE_URL + `/jsonSchema`,
            method: 'POST',
            body: scheme
        })
    }

    /**
     * Update schema with put method on server, update will be determined by key in schema
     * @param scheme - transfer schema from gui
     * @returns {Promise<any>}
     */
    async updateScheme(scheme) {
        return await request({
            url: API_BASE_URL + `/jsonSchema`,
            method: 'PUT',
            body: scheme
        })
    }

    /**
     * Remove schema from service by id
     * @param id - if of script to remove
     * @returns {Promise<any>}
     */
    async removeScheme(id) {
        return await request({
            url: API_BASE_URL + `/jsonSchema/?id=${id}`,
            method: 'DELETE',
        })
    }
}

export default new SchemeService();