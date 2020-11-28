import {API_BASE_URL} from "../constants";
import request from '../Request'

const REST_SCHEMA_URL = API_BASE_URL + "/bomber/bomber-api/v1/schemas";

class RestSchemaService {
    async create(createSchemaRequest) {
        console.log("request", createSchemaRequest);
        return await request({
            url: REST_SCHEMA_URL,
            method: 'POST',
            body: JSON.stringify(createSchemaRequest)
        })
    }

    async update(id, updateSchemaRequuest) {
        return await request({
            url: REST_SCHEMA_URL + "/" + id,
            method: "PATCH",
            body: JSON.stringify(updateSchemaRequuest)
        })
    }

    async get(id) {
        return await request({
            url: REST_SCHEMA_URL + "/" + id,
            method: "GET"
        })
    }

    async getAll(offset, limit) {
        return await request({
            url: REST_SCHEMA_URL + "?skip=" + offset + "&take=" + limit,
            method: "GET"
        })
    }

    async delete(id) {
        return await request({
            url: REST_SCHEMA_URL + "/" + id,
            method: "DELETE"
        })
    }
}

export default new RestSchemaService()
