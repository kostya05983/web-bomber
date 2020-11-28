import {API_BASE_URL} from "../constants";
import request from '../Request'

const REST_SCRIPT_URL = API_BASE_URL + "/bomber/bomber-api/v1/scripts";

class RestScriptService {
    async create(createScriptRequest) {
        return await request({
            url: REST_SCRIPT_URL,
            method: 'POST',
            body: JSON.stringify(createScriptRequest)
        })
    }

    async update(id, updateScriptRequest) {
        return await request({
            url: REST_SCRIPT_URL + "/" + id,
            method: "PUT",
            body: JSON.stringify(updateScriptRequest)
        })
    }

    async get(id) {
        return await request({
            url: REST_SCRIPT_URL + "/" + id,
            method: "GET"
        })
    }

    async getAll(offset, limit) {
        return await request({
            url: REST_SCRIPT_URL + "?skip=" + offset + "&take=" + limit,
            method: "GET"
        })
    }

    async delete(id) {
        return await request({
            url: API_BASE_URL + "/" + id,
            method: "DELETE"
        })
    }
}

export default new RestScriptService()
