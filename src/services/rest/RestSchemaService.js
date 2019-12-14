import {API_BASE_URL} from "../constants";
import request from '../Request'

const REST_SCHEMA_URL = API_BASE_URL + "/bomber/bomber-api/schema/v1";

class RestSchemaService {
    async createSchema(createSchemaRequest) {
        return await request({
            url: REST_SCHEMA_URL,
            method: 'POST',
            body: createSchemaRequest
        })
    }

    async updateSchema(id, updateSchemaRequuest) {
        return await request({
            url: REST_SCHEMA_URL + "/" + id,
            method: "PATCH",
            body: updateSchemaRequuest
        })
    }

    async getSchema(id) {
        return await request({
            url: REST_SCHEMA_URL + "/" + id,
            method: "GET"
        })
    }

    async getSchemes(offset, limit) {
        return await request({
            url: REST_SCHEMA_URL + "?offset=" + offset + "&limit=" + limit,
            method: "GET"
        })
    }

    async deleteScheme(id) {
        return await request({
            url: REST_SCHEMA_URL + "/" + id,
            method: "DELETE"
        })
    }
}

export default new RestSchemaService()