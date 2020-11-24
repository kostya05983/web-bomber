import {API_BASE_URL} from "./constants";
import request from "./Request";

const REST_SCRIPT_URL = API_BASE_URL + "/bomber/bomber-api/v1/test-forms";

class FormsService {
    async create(createFormRequest) {
        return await request({
            url: REST_SCRIPT_URL,
            method: "POST",
            body: createFormRequest
        })
    }

    async update(id, updateFormRequest) {
        return await request({
            url: REST_SCRIPT_URL + "/" + id,
            method: "PATCH",
            body: updateFormRequest
        })
    }

    async run(id) {
        return await request({
            url: REST_SCRIPT_URL + "/" + id + "/run",
            method: "POST"
        })
    }

    async delete(id) {
        return await request({
            url: REST_SCRIPT_URL + "/" + id,
            method: "DELETE"
        })
    }
}

export default new FormsService()