import {API_BASE_URL} from "../constants";
import request from '../Request'

const REST_SCRIPT_URL = API_BASE_URL + "/bomber/bomber-api/script/v1";

class RestScriptService {
    async createScript(createScriptRequest) {
        return await request({
            url: REST_SCRIPT_URL,
            method: 'POST',
            body: createScriptRequest
        })
    }

    async updateScript(id, updateScriptRequest) {
        return await request({
            url: REST_SCRIPT_URL + "/" + id,
            method: "PUT",
            body: updateScriptRequest
        })
    }

    async getScript(id) {
        return await request({
            url: REST_SCRIPT_URL + "/" + id,
            method: "GET"
        })
    }

    async getScripts(offset, limit) {
        return await request({
            url: REST_SCRIPT_URL + "?offset=" + offset + "&limit=" + limit,
            method: "GET"
        })
    }

    async deleteScript(id) {
        return await request({
            url: API_BASE_URL + "/" + id,
            method: "DELETE"
        })
    }
}

export default new RestScriptService()